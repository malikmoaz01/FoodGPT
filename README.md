# 🍳 FoodGPT

**FoodGPT** is a Generative AI–powered food assistant that helps users decide **what to cook**, **how to cook it**, and **how to plan meals intelligently** using Large Language Models (LLMs) and AI-driven content generation.

FoodGPT transforms simple ingredients and preferences into personalized recipes, cooking instructions, and visual dish previews — making everyday cooking smarter, faster, and more creative.

---

## 🚀 Overview

FoodGPT combines modern Generative AI with a full‑stack web application to deliver a smart cooking experience. Users can input available ingredients, dietary preferences, and cooking constraints to instantly generate customized recipes.

The project is designed as both:

* A **portfolio-grade Generative AI application**
* A **scalable startup-ready product foundation**

---

## ✨ Key Features

### 🧠 AI Recipe Generation

* Generate recipes from available ingredients
* Personalized cooking instructions
* Adjustable servings and cooking time

### 🍽️ Smart Cooking Assistant

* Step‑by‑step cooking mode
* Structured instructions optimized for usability

### 🥗 Dietary Personalization

* Vegetarian, vegan, halal, keto, and custom preferences
* Ingredient substitution suggestions

### 🖼️ AI Food Image Generation

* Visual preview of generated dishes
* Enhances user decision-making before cooking

### 💾 Recipe Management

* Save favorite recipes
* View generation history
* Reuse previous meals

---

## 🏗️ System Architecture

```
User Interface (Frontend)
        ↓
Backend API Layer
        ↓
Generative AI Services (LLM + Image Model)
        ↓
Database (User & Recipe Storage)
```

---

## 🛠️ Tech Stack

**Frontend**

* React / Next.js
* Tailwind CSS

**Backend**

* Node.js / FastAPI (API layer)

**AI Services**

* Large Language Model for recipe generation
* Image generation model for dish visualization

**Database**

* MongoDB / Supabase (planned)

---

## 📦 Project Structure

```
FoodGPT/
├── frontend/      # User interface
├── backend/       # API and AI integration
├── docs/          # Product and technical documentation
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/FoodGPT.git
cd FoodGPT
```

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

### 3. Environment Variables

Create a `.env` file in the backend directory:

```
AI_API_KEY=your_api_key_here
DATABASE_URL=your_database_url
```

### 4. Run Development Servers

```bash
# frontend
npm run dev

# backend
npm run dev
```

---

## 🧪 Example Use Case

**Input:**

> Chicken, rice, yogurt — healthy dinner under 30 minutes

**FoodGPT Output:**

* Generated dish name
* Ingredient list
* Cooking instructions
* Nutrition estimate
* AI-generated food image

---

## 🗺️ Roadmap

### MVP

* [x] Recipe generation
* [x] Cooking instructions
* [ ] Recipe saving
* [ ] Image generation integration

### Phase 2

* [ ] Voice cooking assistant
* [ ] Meal planner
* [ ] Grocery list automation

### Phase 3

* [ ] Nutrition AI coach
* [ ] Multi-language support
* [ ] Mobile application

---

## 🤝 Contributing

Contributions, ideas, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🌟 Vision

FoodGPT aims to redefine everyday cooking by combining creativity and intelligence through Generative AI — turning ingredients into inspiration.

---

**Built with ❤️ using Generative AI**
