export interface CookingStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  tip?: string;
}

export interface NutritionInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  calories: number;
  image: string;
  ingredients: string[];
  steps: CookingStep[];
  nutrition: NutritionInfo;
  tags: string[];
}

/* ── Suggested Ingredients ── */
export const suggestedIngredients = [
  "🍅 Tomatoes",
  "🧄 Garlic",
  "🧅 Onion",
  "🌿 Basil",
  "🧀 Parmesan",
  "🍋 Lemon",
  "🥑 Avocado",
  "🍗 Chicken",
  "🍝 Pasta",
  "🌶️ Chili",
  "🥦 Broccoli",
  "🍄 Mushrooms",
  "🫒 Olive Oil",
  "🥚 Eggs",
  "🧈 Butter",
  "🍚 Rice",
];

/* ── Dietary Preferences ── */
export const dietaryPreferences = [
  { id: "vegetarian", label: "🥬 Vegetarian" },
  { id: "vegan", label: "🌱 Vegan" },
  { id: "gluten-free", label: "🌾 Gluten-Free" },
  { id: "keto", label: "🥩 Keto" },
  { id: "low-carb", label: "🥗 Low-Carb" },
  { id: "dairy-free", label: "🥛 Dairy-Free" },
];

/* ── Cooking Time Options ── */
export const cookingTimeOptions = [
  { id: "15", label: "⚡ Under 15 min" },
  { id: "30", label: "⏱️ Under 30 min" },
  { id: "60", label: "🕐 Under 1 hour" },
  { id: "any", label: "♾️ Any time" },
];

/* ── Mock Recipe ── */
export const mockRecipe: Recipe = {
  id: 1,
  title: "Tuscan Sun-Dried Tomato & Basil Pasta",
  description:
    "A rustic Italian-inspired pasta dish with sun-dried tomatoes, fresh basil, garlic, and a creamy parmesan sauce. Quick enough for a weeknight yet elegant enough for guests.",
  prepTime: "10 min",
  cookTime: "20 min",
  totalTime: "30 min",
  servings: 4,
  difficulty: "Easy",
  calories: 420,
  image: "/food/pasta.png",
  ingredients: [
    "400g fettuccine pasta",
    "1 cup sun-dried tomatoes, chopped",
    "4 cloves garlic, minced",
    "1 cup fresh basil leaves",
    "½ cup shaved parmesan cheese",
    "2 tbsp extra virgin olive oil",
    "1 cup cherry tomatoes, halved",
    "½ cup heavy cream",
    "Salt & black pepper to taste",
    "Red pepper flakes (optional)",
  ],
  steps: [
    {
      step: 1,
      title: "Boil the Pasta",
      description:
        "Bring a large pot of salted water to a rolling boil. Cook the fettuccine until al dente. Reserve 1 cup of pasta water before draining.",
      duration: "10 min",
      tip: "Salt the water generously — it should taste like the sea!",
    },
    {
      step: 2,
      title: "Sauté the Aromatics",
      description:
        "Heat olive oil in a large skillet over medium heat. Add garlic, cook 30 seconds until fragrant. Add sun-dried and cherry tomatoes, cook 3-4 minutes.",
      duration: "5 min",
    },
    {
      step: 3,
      title: "Build the Sauce",
      description:
        "Pour in heavy cream and stir. Add half the parmesan and mix until melted and smooth. Season with salt, pepper, and red pepper flakes.",
      duration: "3 min",
      tip: "Add pasta water a splash at a time if the sauce is too thick.",
    },
    {
      step: 4,
      title: "Combine & Finish",
      description:
        "Add drained pasta to the skillet and toss everything together. Tear fresh basil and fold in gently. Top with remaining parmesan.",
      duration: "2 min",
    },
    {
      step: 5,
      title: "Serve & Enjoy",
      description:
        "Divide among 4 plates. Garnish with extra basil and a drizzle of olive oil. Serve immediately while hot.",
      duration: "1 min",
      tip: "Pair with a light Pinot Grigio for the perfect dinner!",
    },
  ],
  nutrition: {
    calories: 420,
    protein: "14g",
    carbs: "52g",
    fat: "18g",
    fiber: "4g",
  },
  tags: ["Italian", "Vegetarian", "Quick", "Pasta", "Comfort Food"],
};
