"use client";

import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
type Goal = "cut" | "maintain" | "build";
type Gender = "male" | "female";
type DietPref = "veg" | "nonveg";

interface Macros { calories: number; protein: number; carbs: number; fat: number; }
interface Ingredient { name: string; amount: string; kcal: number; p: number; c: number; f: number; }
interface MealEx { name: string; items: Ingredient[]; }

// ── Calculations (Mifflin-St Jeor + ISSN) ─────────────────────────────────
function computeMacros(w: number, h: number, a: number, g: Gender, days: number, goal: Goal): Macros {
  const bmr = g === "male" ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161;
  const af = days <= 1 ? 1.2 : days <= 3 ? 1.375 : days <= 5 ? 1.55 : days <= 6 ? 1.725 : 1.9;
  const calories = Math.round(bmr * af + (goal === "cut" ? -350 : goal === "build" ? 300 : 0));
  const protein = Math.round(w * 2.0);
  const fat = Math.round(w * 0.85);
  const carbs = Math.round(Math.max(calories - protein * 4 - fat * 9, 0) / 4);
  return { calories, protein, carbs, fat };
}

function totals(items: Ingredient[]) {
  return items.reduce((s, i) => ({ kcal: s.kcal + i.kcal, p: s.p + i.p, c: s.c + i.c, f: s.f + i.f }), { kcal: 0, p: 0, c: 0, f: 0 });
}

// ── Meal label → examples key ──────────────────────────────────────────────
function getMealKey(label: string): string {
  const l = label.toLowerCase();
  if (l.includes("pre-training snack")) return "pre-snack";
  if (l.includes("pre-training") || l.includes("lunch / pre")) return "pre-training";
  if (l.includes("post-training")) return "post-training";
  if (l.includes("mid-morning")) return "mid-morning";
  if (l.includes("breakfast")) return "breakfast";
  if (l.includes("lunch")) return "lunch";
  if (l.includes("dinner")) return "dinner";
  return "breakfast";
}

// ── Timing slot → meal badge ───────────────────────────────────────────────
const MEAL_LABELS: Record<number, string[]> = {
  3: ["Breakfast", "Lunch / Pre-Training", "Post-Training Dinner"],
  4: ["Breakfast", "Pre-Training Snack", "Post-Training Meal", "Dinner"],
  5: ["Breakfast", "Mid-Morning", "Pre-Training", "Post-Training", "Dinner"],
  6: ["Breakfast", "Mid-Morning", "Lunch", "Pre-Training", "Post-Training", "Dinner"],
};

function getSlotBadge(slotIdx: number, mealCount: number): string | null {
  const labels = MEAL_LABELS[mealCount] ?? [];
  const map: Record<number, Partial<Record<number, number>>> = {
    0: { 3: 1, 5: 2, 6: 3 },
    1: { 4: 1, 5: 2, 6: 3 },
    4: { 3: 2, 4: 2, 5: 3, 6: 4 },
  };
  const mealIdx = map[slotIdx]?.[mealCount];
  if (mealIdx === undefined) return null;
  return `→ Meal ${mealIdx + 1}: ${labels[mealIdx]}`;
}

// ── Static data ────────────────────────────────────────────────────────────
const TIMING_SLOTS = [
  {
    label: "3 hrs before",
    dotColor: "bg-emerald-400",
    title: "Pre-Training Meal",
    rule: "High carbs · Moderate protein · Low fat · Low fiber",
    why: "Fat and fiber slow gastric emptying — you don't want half-digested food coming back up when someone is stacking you in north-south. Keep this meal light and digestible.",
    veg: ["White rice + dal + cucumber raita", "Roti + paneer sabzi + low-fat curd", "Oats + banana + milk (low-fat)"],
    nonveg: ["Rice + grilled chicken + cucumber salad", "Roti + egg bhurji (2 eggs) + curd", "Pasta + chicken breast + light tomato sauce"],
  },
  {
    label: "1 hr before",
    dotColor: "bg-amber-400",
    title: "Pre-Training Snack",
    rule: "Simple carbs only · Zero fat · Zero fiber",
    why: "Top up blood glucose without weighing down your gut. A banana 10 min before is a spike-and-crash. 1 hr before is perfect. This is exactly what went wrong with your friend.",
    veg: ["1 ripe banana", "White toast + honey (no butter)", "4–5 dates + 200ml water"],
    nonveg: ["Banana + half scoop whey (low-fat milk)", "Rice cakes (2–3)", "4–5 dates + electrolyte drink"],
  },
  {
    label: "On the mat",
    dotColor: "bg-white",
    title: "During Training",
    rule: "Sip water every round · Electrolytes if session > 60 min",
    why: "In a gi you are a walking sauna. 2% dehydration measurably drops grip strength and reaction time. You will gas faster and get caught in submissions you would normally escape.",
    veg: ["Water + pinch of salt + lime", "Coconut water", "ORS sachet in water bottle"],
    nonveg: ["Water + pinch of salt + lime", "Coconut water", "ORS sachet in water bottle"],
  },
  {
    label: "0–30 min after",
    dotColor: "bg-purple-400",
    title: "Immediate Recovery",
    rule: "Fast carbs + fast protein · Don't skip this",
    why: "Glycogen synthesis rate is highest in the first 30 minutes post-training. Miss this window and your recovery for the next session takes significantly longer.",
    veg: ["Whey shake + banana", "Chocolate milk (250ml) + 3–4 dates", "Low-fat curd + honey + poha"],
    nonveg: ["Whey shake + banana", "Chocolate milk (250ml) + 2 boiled eggs", "Greek yogurt + banana + dates"],
  },
  {
    label: "1.5–2 hrs after",
    dotColor: "bg-green-400",
    title: "Recovery Meal",
    rule: "High protein · High carbs · Add vegetables",
    why: "Most important meal of the day. Muscle protein synthesis peaks 1–2 hrs post-training. A protein shake alone — your friend's dinner mistake — gives you zero glycogen replenishment.",
    veg: ["Paneer rice bowl + stir-fried veggies", "Tofu + sweet potato + salad", "Rajma chawal + cucumber salad"],
    nonveg: ["Chicken breast + sweet potato + salad", "Egg rice bowl (3 eggs) + stir-fried veggies", "Salmon / tuna + white rice + salad"],
  },
];

const MISTAKES = [
  {
    mistake: "Eating a banana right before training",
    consequence: "Fast sugar spike → insulin response → energy crash mid-roll. Your friend almost puked because blood sugar tanked during drilling.",
    fix: "Banana is ideal 1 hr before. Right before = fighting on a crash, not a fuel-up.",
  },
  {
    mistake: "Protein shake only for post-workout dinner",
    consequence: "Zero glycogen replenishment. Muscles depleted. Next session you'll feel flat from minute one regardless of how hard you trained.",
    fix: "Always pair your shake with carbs — banana, rice, oats, or dates. Carbs rebuild fuel; protein rebuilds muscle.",
  },
  {
    mistake: "Training completely fasted",
    consequence: "Cortisol spikes, grip strength drops, reaction time slows. You're showing up to spar on an empty tank.",
    fix: "Minimum: 2–3 dates + 300ml water 30 min before. Costs 2 minutes, makes a real difference.",
  },
  {
    mistake: "Drinking only plain water during long sessions",
    consequence: "You sweat out sodium in a gi. Low sodium = cramping during guard passing and scrambles — the moments you need to be explosive.",
    fix: "Add a pinch of salt + lime juice to your bottle for any session over 60 minutes.",
  },
  {
    mistake: "Cutting carbs hard to drop weight fast",
    consequence: "Your brain runs on glucose. Low-carb grappling = slow decisions, poor timing, getting caught in subs you'd normally escape.",
    fix: "Max deficit 300–400 kcal/day. Keep the carbs, trim fat slightly. Slow cut, sharp grappling.",
  },
];

// ── Meal example data (USDA / ISSN values) ────────────────────────────────
const MEAL_EXAMPLES: Record<string, { veg: MealEx[]; nonveg: MealEx[] }> = {
  breakfast: {
    nonveg: [
      {
        name: "Oatmeal & Egg Bowl",
        items: [
          { name: "Rolled oats", amount: "80g", kcal: 303, p: 11, c: 52, f: 5 },
          { name: "Banana", amount: "1 medium (120g)", kcal: 107, p: 1, c: 27, f: 0 },
          { name: "Whole eggs", amount: "2 eggs (100g)", kcal: 143, p: 13, c: 1, f: 10 },
          { name: "Milk, low-fat", amount: "150ml", kcal: 63, p: 6, c: 9, f: 1 },
        ],
      },
      {
        name: "Egg Bhurji & Toast",
        items: [
          { name: "Whole wheat bread", amount: "2 slices (80g)", kcal: 184, p: 7, c: 35, f: 2 },
          { name: "Whole eggs", amount: "3 eggs (150g)", kcal: 215, p: 19, c: 1, f: 15 },
          { name: "Onion + tomato", amount: "80g", kcal: 30, p: 1, c: 7, f: 0 },
          { name: "Low-fat curd", amount: "100g", kcal: 60, p: 5, c: 7, f: 1 },
        ],
      },
    ],
    veg: [
      {
        name: "Oatmeal Bowl",
        items: [
          { name: "Rolled oats", amount: "80g", kcal: 303, p: 11, c: 52, f: 5 },
          { name: "Banana", amount: "1 medium (120g)", kcal: 107, p: 1, c: 27, f: 0 },
          { name: "Almonds", amount: "20g", kcal: 116, p: 4, c: 4, f: 10 },
          { name: "Milk, low-fat", amount: "200ml", kcal: 84, p: 8, c: 12, f: 2 },
        ],
      },
      {
        name: "Poha & Curd",
        items: [
          { name: "Flattened rice (poha, dry)", amount: "100g", kcal: 370, p: 7, c: 79, f: 1 },
          { name: "Low-fat curd", amount: "150g", kcal: 90, p: 8, c: 10, f: 2 },
          { name: "Roasted peanuts", amount: "15g", kcal: 85, p: 4, c: 2, f: 7 },
        ],
      },
    ],
  },
  "mid-morning": {
    nonveg: [
      {
        name: "Greek Yogurt & Banana",
        items: [
          { name: "Greek yogurt", amount: "150g", kcal: 130, p: 18, c: 9, f: 0 },
          { name: "Banana", amount: "1 medium (120g)", kcal: 107, p: 1, c: 27, f: 0 },
        ],
      },
      {
        name: "Boiled Eggs & Apple",
        items: [
          { name: "Boiled eggs", amount: "2 eggs (100g)", kcal: 143, p: 13, c: 1, f: 10 },
          { name: "Apple", amount: "1 medium (150g)", kcal: 78, p: 0, c: 21, f: 0 },
          { name: "Almonds", amount: "10g", kcal: 58, p: 2, c: 2, f: 5 },
        ],
      },
    ],
    veg: [
      {
        name: "Fruit & Nut Bowl",
        items: [
          { name: "Apple", amount: "1 medium (150g)", kcal: 78, p: 0, c: 21, f: 0 },
          { name: "Peanut butter", amount: "15g", kcal: 90, p: 4, c: 3, f: 8 },
          { name: "Almonds", amount: "15g", kcal: 87, p: 3, c: 3, f: 8 },
        ],
      },
      {
        name: "Curd, Banana & Honey",
        items: [
          { name: "Low-fat curd", amount: "150g", kcal: 90, p: 8, c: 10, f: 2 },
          { name: "Banana", amount: "1 medium (120g)", kcal: 107, p: 1, c: 27, f: 0 },
          { name: "Honey", amount: "10g", kcal: 30, p: 0, c: 8, f: 0 },
        ],
      },
    ],
  },
  lunch: {
    nonveg: [
      {
        name: "Rice & Chicken Curry",
        items: [
          { name: "White rice, cooked", amount: "200g", kcal: 260, p: 5, c: 57, f: 0 },
          { name: "Chicken curry (light)", amount: "150g", kcal: 220, p: 25, c: 8, f: 10 },
          { name: "Cucumber salad", amount: "100g", kcal: 15, p: 1, c: 3, f: 0 },
        ],
      },
      {
        name: "Tuna Rice Bowl",
        items: [
          { name: "White rice, cooked", amount: "200g", kcal: 260, p: 5, c: 57, f: 0 },
          { name: "Tuna (canned, drained)", amount: "120g", kcal: 132, p: 29, c: 0, f: 2 },
          { name: "Mixed veggies", amount: "100g", kcal: 50, p: 2, c: 10, f: 0 },
        ],
      },
    ],
    veg: [
      {
        name: "Rajma Chawal",
        items: [
          { name: "White rice, cooked", amount: "200g", kcal: 260, p: 5, c: 57, f: 0 },
          { name: "Rajma, cooked", amount: "150g", kcal: 175, p: 10, c: 32, f: 1 },
          { name: "Low-fat raita", amount: "100g", kcal: 60, p: 5, c: 7, f: 1 },
        ],
      },
      {
        name: "Dal Tadka & Rice",
        items: [
          { name: "White rice, cooked", amount: "200g", kcal: 260, p: 5, c: 57, f: 0 },
          { name: "Toor dal, cooked", amount: "150g", kcal: 150, p: 10, c: 27, f: 0 },
          { name: "Mixed sabzi", amount: "100g", kcal: 60, p: 2, c: 10, f: 2 },
        ],
      },
    ],
  },
  "pre-training": {
    nonveg: [
      {
        name: "Rice & Grilled Chicken",
        items: [
          { name: "White rice, cooked", amount: "150g", kcal: 195, p: 4, c: 43, f: 0 },
          { name: "Grilled chicken breast", amount: "120g", kcal: 198, p: 37, c: 0, f: 4 },
          { name: "Low-fat curd", amount: "100g", kcal: 60, p: 5, c: 7, f: 1 },
          { name: "Cucumber", amount: "100g", kcal: 15, p: 1, c: 3, f: 0 },
        ],
      },
      {
        name: "Pasta & Chicken Breast",
        items: [
          { name: "Pasta, cooked", amount: "200g", kcal: 264, p: 9, c: 52, f: 1 },
          { name: "Chicken breast", amount: "100g", kcal: 165, p: 31, c: 0, f: 4 },
          { name: "Tomato sauce, light", amount: "80g", kcal: 32, p: 1, c: 7, f: 0 },
        ],
      },
    ],
    veg: [
      {
        name: "Rice, Dal & Curd",
        items: [
          { name: "White rice, cooked", amount: "150g", kcal: 195, p: 4, c: 43, f: 0 },
          { name: "Toor dal, cooked", amount: "150g", kcal: 150, p: 10, c: 27, f: 0 },
          { name: "Low-fat curd", amount: "150g", kcal: 90, p: 8, c: 10, f: 2 },
        ],
      },
      {
        name: "Oats with Banana & Milk",
        items: [
          { name: "Rolled oats", amount: "80g", kcal: 303, p: 11, c: 52, f: 5 },
          { name: "Banana", amount: "1 large (150g)", kcal: 134, p: 2, c: 34, f: 0 },
          { name: "Milk, low-fat", amount: "200ml", kcal: 84, p: 8, c: 12, f: 2 },
        ],
      },
    ],
  },
  "pre-snack": {
    nonveg: [
      {
        name: "Banana & Whey Shake",
        items: [
          { name: "Banana", amount: "1 medium (120g)", kcal: 107, p: 1, c: 27, f: 0 },
          { name: "Whey protein (half scoop)", amount: "15g", kcal: 60, p: 12, c: 2, f: 1 },
        ],
      },
      {
        name: "Rice Cakes & Honey",
        items: [
          { name: "Rice cakes", amount: "3 pieces (30g)", kcal: 120, p: 2, c: 25, f: 1 },
          { name: "Honey", amount: "15g", kcal: 45, p: 0, c: 12, f: 0 },
        ],
      },
    ],
    veg: [
      {
        name: "Dates & Banana",
        items: [
          { name: "Banana", amount: "1 medium (120g)", kcal: 107, p: 1, c: 27, f: 0 },
          { name: "Dates", amount: "4 pieces (32g)", kcal: 90, p: 1, c: 24, f: 0 },
        ],
      },
      {
        name: "White Toast & Honey",
        items: [
          { name: "White bread", amount: "2 slices (70g)", kcal: 185, p: 6, c: 36, f: 2 },
          { name: "Honey", amount: "15g", kcal: 45, p: 0, c: 12, f: 0 },
        ],
      },
    ],
  },
  "post-training": {
    nonveg: [
      {
        name: "Chicken & Sweet Potato",
        items: [
          { name: "Grilled chicken breast", amount: "150g", kcal: 248, p: 46, c: 0, f: 5 },
          { name: "Sweet potato, baked", amount: "200g", kcal: 172, p: 3, c: 40, f: 0 },
          { name: "Mixed salad", amount: "100g", kcal: 25, p: 1, c: 5, f: 0 },
          { name: "Olive oil drizzle", amount: "5g", kcal: 44, p: 0, c: 0, f: 5 },
        ],
      },
      {
        name: "Egg & Rice Bowl",
        items: [
          { name: "Whole eggs", amount: "3 eggs (150g)", kcal: 215, p: 19, c: 1, f: 15 },
          { name: "White rice, cooked", amount: "200g", kcal: 260, p: 5, c: 57, f: 0 },
          { name: "Stir-fried veggies", amount: "150g", kcal: 75, p: 3, c: 12, f: 2 },
        ],
      },
    ],
    veg: [
      {
        name: "Paneer Rice Bowl",
        items: [
          { name: "Paneer", amount: "100g", kcal: 265, p: 18, c: 4, f: 21 },
          { name: "White rice, cooked", amount: "200g", kcal: 260, p: 5, c: 57, f: 0 },
          { name: "Mixed veggies, stir-fried", amount: "100g", kcal: 50, p: 2, c: 10, f: 0 },
        ],
      },
      {
        name: "Tofu Stir-Fry & Rice",
        items: [
          { name: "Firm tofu", amount: "150g", kcal: 117, p: 13, c: 3, f: 6 },
          { name: "White rice, cooked", amount: "200g", kcal: 260, p: 5, c: 57, f: 0 },
          { name: "Mixed veggies", amount: "150g", kcal: 75, p: 3, c: 12, f: 2 },
          { name: "Olive oil", amount: "5g", kcal: 44, p: 0, c: 0, f: 5 },
        ],
      },
    ],
  },
  dinner: {
    nonveg: [
      {
        name: "Salmon & Sweet Potato",
        items: [
          { name: "Salmon fillet", amount: "150g", kcal: 206, p: 30, c: 0, f: 9 },
          { name: "Sweet potato", amount: "200g", kcal: 172, p: 3, c: 40, f: 0 },
          { name: "Green salad", amount: "100g", kcal: 20, p: 1, c: 4, f: 0 },
        ],
      },
      {
        name: "Chicken & Roti",
        items: [
          { name: "Grilled chicken", amount: "120g", kcal: 198, p: 37, c: 0, f: 4 },
          { name: "Whole wheat roti", amount: "2 rotis (80g)", kcal: 220, p: 8, c: 44, f: 2 },
          { name: "Dal, cooked", amount: "100g", kcal: 100, p: 7, c: 18, f: 0 },
        ],
      },
    ],
    veg: [
      {
        name: "Rajma & Roti",
        items: [
          { name: "Whole wheat roti", amount: "3 rotis (120g)", kcal: 330, p: 12, c: 66, f: 3 },
          { name: "Rajma gravy", amount: "150g", kcal: 175, p: 10, c: 32, f: 1 },
          { name: "Salad", amount: "100g", kcal: 25, p: 1, c: 5, f: 0 },
        ],
      },
      {
        name: "Dal & Roti",
        items: [
          { name: "Whole wheat roti", amount: "3 rotis (120g)", kcal: 330, p: 12, c: 66, f: 3 },
          { name: "Moong dal, cooked", amount: "150g", kcal: 135, p: 10, c: 23, f: 0 },
          { name: "Mixed sabzi", amount: "100g", kcal: 60, p: 2, c: 10, f: 2 },
        ],
      },
    ],
  },
};

// ── Page ───────────────────────────────────────────────────────────────────
export default function BJJDietPage() {
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(175);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState<Gender>("male");
  const [trainingDays, setTrainingDays] = useState(4);
  const [goal, setGoal] = useState<Goal>("maintain");
  const [macros, setMacros] = useState<Macros | null>(null);

  const [dietPref, setDietPref] = useState<DietPref>("nonveg");
  const [mealsPerDay, setMealsPerDay] = useState(4);
  const [expandedMeal, setExpandedMeal] = useState<number | null>(null);

  const [activeSlot, setActiveSlot] = useState<number | null>(null);

  const [hydroWeight, setHydroWeight] = useState(75);
  const [trainingHours, setTrainingHours] = useState(1.5);

  function handleCalculate() {
    setMacros(computeMacros(weight, height, age, gender, trainingDays, goal));
    setHydroWeight(weight);
  }

  const water = ((hydroWeight * 35 + trainingHours * 500) / 1000).toFixed(1);
  const glasses = Math.round(Number(water) * 4);

  const mealList = MEAL_LABELS[mealsPerDay] ?? [];
  const perMeal = macros
    ? {
        p: Math.round(macros.protein / mealsPerDay),
        c: Math.round(macros.carbs / mealsPerDay),
        f: Math.round(macros.fat / mealsPerDay),
        cal: Math.round(macros.calories / mealsPerDay),
      }
    : null;

  // which timing slots to show (hide 1-hr snack for 3-meal plan)
  const visibleSlots = TIMING_SLOTS.map((s, i) => ({ ...s, idx: i }))
    .filter((s) => !(s.idx === 1 && mealsPerDay === 3));

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#080808]/90 backdrop-blur-md">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="text-sm font-mono font-bold tracking-widest uppercase">
            <span className="text-zinc-400">&gt;</span>{" "}
            <span className="gradient-text">mat</span>
            <span className="text-zinc-500">.fuel</span>
          </a>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden md:flex items-center gap-6">
              {[["#calculator","Calculator"],["#meals","Meals"],["#timing","Timing"],["#hydration","Hydration"],["#mistakes","Mistakes"]].map(([href, label]) => (
                <a key={href} href={href} className="text-xs font-mono text-zinc-500 hover:text-white transition-colors">{label}</a>
              ))}
            </div>
            {/* Mobile: quick section links as horizontal scroll */}
            <div className="flex md:hidden items-center gap-3 overflow-x-auto no-scrollbar">
              {[["#calculator","Calc"],["#meals","Meals"],["#timing","Timing"],["#hydration","Water"]].map(([href, label]) => (
                <a key={href} href={href} className="text-xs font-mono text-zinc-500 hover:text-white transition-colors whitespace-nowrap">{label}</a>
              ))}
            </div>
            <a href="/" className="text-xs font-mono px-3 py-1.5 rounded border border-zinc-700 text-zinc-300 hover:border-white hover:text-white transition-all whitespace-nowrap flex-shrink-0">
              ← Portfolio
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-28">

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section id="hero" className="text-center space-y-6 pt-8">
          <p className="font-mono text-zinc-500 text-xs tracking-widest uppercase">
            BJJ · Combat Sports · Athlete Nutrition
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
            Fuel Your{" "}
            <span className="gradient-text">Grappling</span>
          </h1>
          <p className="max-w-lg mx-auto text-zinc-400 text-lg leading-relaxed">
            No AI. No supplements to sell. Just the math of eating right for jiu-jitsu —
            calculated from your weight, training schedule, and goals.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#calculator" className="px-6 py-3 rounded-lg bg-white hover:bg-zinc-200 text-black font-medium text-sm transition-all">
              Calculate My Macros
            </a>
            <a href="#timing" className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-400 text-zinc-400 hover:text-white font-medium text-sm transition-all">
              Timing Guide →
            </a>
          </div>
        </section>

        {/* ── 01 Calculator ───────────────────────────────────────────────── */}
        <section id="calculator" className="space-y-6 scroll-mt-20">
          <SectionHead num="01." title="Macro" accent="Calculator" />

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8 space-y-7">

            {/* Diet pref — global toggle used across meals + timing */}
            <div className="flex items-center gap-4 pb-5 border-b border-zinc-800">
              <span className="text-xs font-mono text-zinc-500 tracking-widest">DIET PREFERENCE</span>
              <div className="flex gap-2">
                {(["nonveg", "veg"] as DietPref[]).map((p) => (
                  <button key={p} onClick={() => setDietPref(p)}
                    className={`px-4 py-1.5 rounded text-xs font-mono transition-all ${dietPref === p ? "bg-white text-black" : "border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"}`}>
                    {p === "nonveg" ? "Non-Veg" : "Veg"}
                  </button>
                ))}
              </div>
            </div>

            {/* Sex */}
            <div className="space-y-3">
              <FieldLabel>Biological sex</FieldLabel>
              <div className="flex gap-3">
                {(["male", "female"] as Gender[]).map((g) => (
                  <button key={g} onClick={() => setGender(g)}
                    className={`px-5 py-2 rounded-lg capitalize text-sm font-medium transition-all ${gender === g ? "bg-white text-black" : "bg-zinc-800 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"}`}>
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Numeric inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <NumField label="Weight (kg)" value={weight} set={setWeight} min={40} max={150} />
              <NumField label="Height (cm)" value={height} set={setHeight} min={140} max={220} />
              <NumField label="Age" value={age} set={setAge} min={14} max={70} />
            </div>

            {/* Training days */}
            <div className="space-y-3">
              <FieldLabel>
                Training days / week —{" "}
                <span className="text-white font-semibold">{trainingDays} day{trainingDays !== 1 ? "s" : ""}</span>
              </FieldLabel>
              <input type="range" min={1} max={7} value={trainingDays}
                onChange={(e) => setTrainingDays(Number(e.target.value))}
                className="w-full accent-white" />
              <div className="flex justify-between text-xs font-mono text-zinc-700">
                {[1,2,3,4,5,6,7].map((d) => <span key={d}>{d}</span>)}
              </div>
            </div>

            {/* Goal */}
            <div className="space-y-3">
              <FieldLabel>Goal</FieldLabel>
              <div className="grid grid-cols-3 gap-3">
                {([
                  ["cut", "Lose Fat", "−350 kcal/day"],
                  ["maintain", "Stay Sharp", "Maintenance"],
                  ["build", "Build Muscle", "+300 kcal/day"],
                ] as [Goal, string, string][]).map(([g, label, sub]) => (
                  <button key={g} onClick={() => setGoal(g)}
                    className={`p-3 sm:p-4 rounded-xl text-left transition-all ${goal === g ? "bg-zinc-700 border border-zinc-500" : "bg-zinc-800 border border-zinc-800 hover:border-zinc-600"}`}>
                    <div className="font-semibold text-xs sm:text-sm text-white leading-tight">{label}</div>
                    <div className={`text-xs mt-1 hidden sm:block ${goal === g ? "text-zinc-300" : "text-zinc-600"}`}>{sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleCalculate}
              className="w-full py-4 rounded-xl font-bold text-black bg-white hover:bg-zinc-200 transition-all text-sm tracking-widest uppercase">
              Calculate My Macros
            </button>
          </div>

          {/* Results */}
          {macros && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8 animate-fadeup">
              <div className="text-center mb-8">
                <p className="font-mono text-zinc-600 text-xs tracking-widest uppercase mb-2">Daily Calorie Target</p>
                <div className="text-7xl font-bold text-white">{macros.calories}</div>
                <p className="text-zinc-500 text-sm mt-1">kcal / day</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Protein", value: macros.protein, sub: `${(macros.protein / weight).toFixed(1)}g/kg`, accent: "from-emerald-500/60 to-transparent" },
                  { label: "Carbs", value: macros.carbs, sub: "primary fuel", accent: "from-blue-500/60 to-transparent" },
                  { label: "Fat", value: macros.fat, sub: `${(macros.fat / weight).toFixed(1)}g/kg`, accent: "from-amber-500/60 to-transparent" },
                ].map(({ label, value, sub, accent }) => (
                  <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                    <div className={`h-px w-full bg-gradient-to-r ${accent}`} />
                    <div className="p-4 text-center">
                      <div className="text-4xl font-bold text-white">{value}<span className="text-xl">g</span></div>
                      <div className="text-sm font-semibold text-zinc-300 mt-1">{label}</div>
                      <div className="text-xs text-zinc-600 mt-0.5">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-zinc-700 mt-5">
                Mifflin-St Jeor BMR × activity factor · ISSN combat sport protein guidelines
              </p>
            </div>
          )}
        </section>

        {/* ── 02 Meal Distribution ────────────────────────────────────────── */}
        <section id="meals" className="space-y-6 scroll-mt-20">
          <SectionHead num="02." title="Meal" accent="Distribution" />

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-zinc-500 tracking-widest">MEALS PER DAY</span>
            <div className="flex gap-2">
              {[3, 4, 5, 6].map((n) => (
                <button key={n} onClick={() => { setMealsPerDay(n); setExpandedMeal(null); }}
                  className={`w-10 h-10 rounded font-mono text-sm font-bold transition-all ${mealsPerDay === n ? "bg-white text-black" : "bg-zinc-900 border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white"}`}>
                  {n}
                </button>
              ))}
            </div>
          </div>

          {!macros ? (
            <div className="border border-dashed border-zinc-800 rounded-xl p-10 text-center text-sm text-zinc-600">
              Complete the calculator above to get your personalized meal breakdown.
            </div>
          ) : (
            <div className="space-y-2">
              {mealList.map((label, i) => {
                const key = getMealKey(label);
                const examples = MEAL_EXAMPLES[key];
                const exList: MealEx[] = examples ? (dietPref === "veg" ? examples.veg : examples.nonveg) : [];
                const isOpen = expandedMeal === i;

                return (
                  <div key={i} className={`bg-zinc-900 border rounded-xl overflow-hidden transition-all ${isOpen ? "border-zinc-600" : "border-zinc-800"}`}>
                    {/* Header row */}
                    <button onClick={() => setExpandedMeal(isOpen ? null : i)}
                      className="w-full px-4 sm:px-5 py-4 flex items-center justify-between gap-3 text-left">
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white text-sm">{label}</div>
                        {perMeal && (
                          <div className="text-xs text-zinc-500 mt-0.5">{perMeal.cal} kcal</div>
                        )}
                      </div>
                      {perMeal && (
                        <div className="flex items-center gap-3 flex-shrink-0">
                          {/* Always show macros — compact on mobile, spaced on desktop */}
                          <div className="flex gap-3 sm:gap-5">
                            <MChip label="P" value={perMeal.p} accent="text-emerald-400" />
                            <MChip label="C" value={perMeal.c} accent="text-blue-400" />
                            <MChip label="F" value={perMeal.f} accent="text-amber-400" />
                          </div>
                          <span className="text-zinc-600 text-xs">{isOpen ? "▲" : "▼"}</span>
                        </div>
                      )}
                    </button>

                    {/* Expanded — meal examples */}
                    {isOpen && exList.length > 0 && (
                      <div className="border-t border-zinc-800 px-5 py-5 space-y-6">
                        <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase">
                          {dietPref === "nonveg" ? "Non-Veg" : "Veg"} Options · Adjust portions to hit ~{perMeal?.cal} kcal
                        </p>
                        {exList.map((ex, j) => {
                          const t = totals(ex.items);
                          return (
                            <div key={j}>
                              {j > 0 && <div className="border-t border-zinc-800 mb-5" />}
                              <p className="font-semibold text-zinc-300 text-sm mb-3">
                                <span className="text-zinc-600 mr-2">Option {j + 1}</span>
                                {ex.name}
                              </p>
                              <div className="overflow-x-auto -mx-1 px-1">
                                <table className="w-full text-sm" style={{ minWidth: "420px" }}>
                                  <thead>
                                    <tr className="text-left">
                                      <th className="text-xs font-mono text-zinc-600 pb-2 pr-4">Ingredient</th>
                                      <th className="text-xs font-mono text-zinc-600 pb-2 pr-4">Amount</th>
                                      <th className="text-xs font-mono text-zinc-600 pb-2 pr-4 text-right">Kcal</th>
                                      <th className="text-xs font-mono text-zinc-600 pb-2 pr-4 text-right">P</th>
                                      <th className="text-xs font-mono text-zinc-600 pb-2 pr-4 text-right">C</th>
                                      <th className="text-xs font-mono text-zinc-600 pb-2 text-right">F</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {ex.items.map((item, k) => (
                                      <tr key={k} className="border-t border-zinc-800/50">
                                        <td className="py-2 pr-4 text-zinc-300">{item.name}</td>
                                        <td className="py-2 pr-4 text-zinc-500 font-mono text-xs">{item.amount}</td>
                                        <td className="py-2 pr-4 text-zinc-400 text-right font-mono">{item.kcal}</td>
                                        <td className="py-2 pr-4 text-emerald-400 text-right font-mono">{item.p}g</td>
                                        <td className="py-2 pr-4 text-blue-400 text-right font-mono">{item.c}g</td>
                                        <td className="py-2 text-amber-400 text-right font-mono">{item.f}g</td>
                                      </tr>
                                    ))}
                                    <tr className="border-t border-zinc-700">
                                      <td className="pt-2 pr-4 font-bold text-white text-xs uppercase font-mono">Total</td>
                                      <td className="pt-2 pr-4" />
                                      <td className="pt-2 pr-4 font-bold text-white text-right font-mono">{t.kcal}</td>
                                      <td className="pt-2 pr-4 font-bold text-emerald-400 text-right font-mono">{t.p}g</td>
                                      <td className="pt-2 pr-4 font-bold text-blue-400 text-right font-mono">{t.c}g</td>
                                      <td className="pt-2 font-bold text-amber-400 text-right font-mono">{t.f}g</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <p className="text-xs text-zinc-700 px-1 pt-1">
                Even split shown. In practice: more carbs in pre-training meals, more protein in post-training meals.
              </p>
            </div>
          )}
        </section>

        {/* ── 03 Timing Guide ─────────────────────────────────────────────── */}
        <section id="timing" className="space-y-6 scroll-mt-20">
          <SectionHead num="03." title="Training" accent="Timing Guide" />
          <p className="text-zinc-400">
            Timing guide adapts to your <span className="text-white">{mealsPerDay}-meal plan</span>.
            {mealsPerDay === 3 && " 1-hr snack slot hidden — no dedicated snack in a 3-meal plan."}
            {" "}Tap any slot to expand.
          </p>

          <div className="space-y-2">
            {visibleSlots.map((slot) => {
              const badge = getSlotBadge(slot.idx, mealsPerDay);
              const isOpen = activeSlot === slot.idx;
              return (
                <div key={slot.idx}>
                  <button onClick={() => setActiveSlot(isOpen ? null : slot.idx)}
                    className={`w-full bg-zinc-900 border rounded-xl text-left px-5 py-4 transition-all hover:border-zinc-600 ${isOpen ? "border-zinc-600 rounded-b-none" : "border-zinc-800"}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${slot.dotColor}`} />
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-mono text-zinc-500">{slot.label}</span>
                            {badge && (
                              <span className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                                {badge}
                              </span>
                            )}
                          </div>
                          <div className="font-semibold text-white mt-0.5">{slot.title}</div>
                          <div className="text-xs text-zinc-500 mt-0.5">{slot.rule}</div>
                        </div>
                      </div>
                      <span className="text-zinc-600 text-xs ml-4 flex-shrink-0">{isOpen ? "▲" : "▼"}</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="bg-zinc-900 border border-zinc-600 border-t-0 rounded-b-xl px-5 py-5 space-y-4">
                      <div className="bg-zinc-800/60 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="text-zinc-300 font-semibold">Why: </span>{slot.why}
                      </div>
                      <div>
                        <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-3">
                          {dietPref === "nonveg" ? "Non-Veg Options" : "Veg Options"}
                        </p>
                        <ul className="space-y-2">
                          {(dietPref === "nonveg" ? slot.nonveg : slot.veg).map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-zinc-300">
                              <span className="text-zinc-600 mt-0.5 flex-shrink-0">▹</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 04 Hydration ────────────────────────────────────────────────── */}
        <section id="hydration" className="space-y-6 scroll-mt-20">
          <SectionHead num="04." title="Hydration" accent="Calculator" />

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <NumField label="Weight (kg)" value={hydroWeight} set={setHydroWeight} min={40} max={150} />
              <div className="space-y-3">
                <FieldLabel>
                  Training hours — <span className="text-white font-semibold">{trainingHours}h</span>
                </FieldLabel>
                <input type="range" min={0.5} max={4} step={0.5} value={trainingHours}
                  onChange={(e) => setTrainingHours(Number(e.target.value))}
                  className="w-full accent-white" />
                <div className="flex justify-between text-xs font-mono text-zinc-700">
                  {[0.5,1,1.5,2,2.5,3,3.5,4].map((h) => <span key={h}>{h}h</span>)}
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-6 text-center">
              <p className="font-mono text-zinc-600 text-xs tracking-widest uppercase mb-2">Daily Water Target</p>
              <div className="text-7xl font-bold text-white">{water}</div>
              <p className="text-zinc-500 text-sm mt-1">litres / day</p>
              <p className="text-zinc-700 text-xs mt-1">= {glasses} glasses of 250ml</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Morning", tip: "Drink 500ml before your first meal. After 7-8 hrs without water you are already mildly dehydrated." },
                { title: "On The Mat", tip: Number(trainingHours) > 1 ? "Session > 60 min: pinch of salt + lime in your bottle. You are losing sodium fast in that gi." : "Sip 150–200ml every 15–20 min. You sweat more than you think in a gi." },
                { title: "Post-Training", tip: "Weigh yourself before and after. Drink 1.5L per kg of bodyweight lost to fully rehydrate." },
              ].map(({ title, tip }) => (
                <div key={title} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4">
                  <div className="font-semibold text-sm text-white mb-1">{title}</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">{tip}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 Mistakes ─────────────────────────────────────────────────── */}
        <section id="mistakes" className="space-y-6 scroll-mt-20">
          <SectionHead num="05." title="Common" accent="Mistakes" />
          <p className="text-zinc-400">These come up every week at the gym. The banana story is just the beginning.</p>

          <div className="space-y-4">
            {MISTAKES.map((m, i) => (
              <div key={i} className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all">
                <div className="h-px w-full bg-gradient-to-r from-red-500/60 to-transparent" />
                <div className="p-5 space-y-2">
                  <div className="font-semibold text-white text-sm flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">✗</span>
                    {m.mistake}
                  </div>
                  <div className="text-sm text-zinc-400 leading-relaxed">{m.consequence}</div>
                  <div className="text-sm text-emerald-400 flex items-start gap-2">
                    <span className="flex-shrink-0 font-bold">✓</span>
                    {m.fix}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer className="text-center text-xs text-zinc-700 pb-8 space-y-1">
          <div>
            Built by{" "}
            <a href="/" className="text-zinc-500 hover:text-white transition-colors hover:underline">
              Bajjuri Vinay Kumar
            </a>
            {" "}· Share this with your gym
          </div>
          <div>Mifflin-St Jeor BMR · ISSN Sport Nutrition Position Stand · WHO hydration guidelines</div>
        </footer>
      </main>
    </div>
  );
}

// ── Micro-components ────────────────────────────────────────────────────────
function SectionHead({ num, title, accent }: { num: string; title: string; accent: string }) {
  return (
    <div>
      <p className="font-mono text-zinc-500 text-xs tracking-widest uppercase mb-2">{num} {title} {accent}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title} <span className="gradient-text">{accent}</span>
      </h2>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-xs font-mono text-zinc-500 tracking-widest uppercase">{children}</label>;
}

function NumField({ label, value, set, min, max }: {
  label: string; value: number; set: (v: number) => void; min: number; max: number;
}) {
  const [raw, setRaw] = useState(String(value));

  return (
    <div className="space-y-2">
      <FieldLabel>{label}</FieldLabel>
      <input
        type="number"
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
        onBlur={() => {
          const v = Math.round(Number(raw));
          const clamped = isNaN(v) ? min : Math.max(min, Math.min(max, v));
          setRaw(String(clamped));
          set(clamped);
        }}
        min={min}
        max={max}
        className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 text-lg font-mono focus:outline-none focus:border-zinc-500 transition-colors"
      />
    </div>
  );
}

function MChip({ label, value, accent }: { label: string; value: number; accent: string }) {
  return (
    <div className="text-center">
      <div className={`font-bold text-sm ${accent}`}>{value}g</div>
      <div className="text-xs text-zinc-600">{label}</div>
    </div>
  );
}
