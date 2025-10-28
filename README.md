# 📝 Cheat Sheet App

A lightweight, themeable cheat sheet app built with React — designed for quick reference across front-end, back-end, and miscellaneous dev notes.

✨ **Now with grouped notes, search, and mobile support!**

🔗 **Live Demo:** <a href="https://linknn.github.io/turbo-fiesta/" target="_blank" rel="noopener noreferrer">View the Deployed App</a>

---

## ⚡ Features

- 🌙 **Dark & Light Mode** – toggle your preferred theme
- 💾 **Persistent Theme** – remembers your last choice
- 🔍 **Global Search** – instantly find keywords across all notes
- 🗂 **Organized Categories** – grouped into Front-End, Back-End, and Miscellaneous
- 📱 **Responsive Design** – works beautifully on desktop and mobile
- 🧩 **Fun Easter Eggs** – hidden surprises for curious devs
- 🖥️ **Plain React & CSS** – no Tailwind, no extra libraries

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/username/your-repo.git
cd your-repo
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the app locally**

```bash
npm run dev
```

The project will start on http://localhost:5173/ (or whichever port Vite chooses).
You can edit the notes and watch the changes update live.

---

## 🛠️ How to Use

- Use the sidebar to navigate between note categories.

- Tap the ☰ menu on mobile to toggle the sidebar.

- Click the 🌙 / ☀️ toggle to switch between dark and light themes.

- Use the search bar to filter notes by keyword.

- Theme and preferences are saved automatically.

---

## 🎨 Global Theme System

The app uses a global color scheme defined in `:root` within `theme.css`.  
This provides a **shared palette of CSS variables** for both light and dark themes, making it easy to adjust or expand the look of the entire application.

Example snippet:

```css
:root {
  --color-bg-light: #f8e6c1;
  --color-bg-dark: #0d1117;
  --color-accent-light: #e07a5f;
  --color-accent-dark: #f77f00;
}
```

These CSS variables can be accessed from any component, ensuring a consistent visual design.
You can easily update them or introduce new seasonal color schemes.

🎃 Current design: a cozy, fall-inspired palette — warm parchment and pumpkin tones for light mode, and deep purples and oranges for dark mode.

---

## 📁 Notes

The cheat sheet content is stored in the notes directory. You can easily add new categories by creating files here and importing to the useNotes hook.

---

## 🧑‍💻 Tech Stack

⚛️ React (Vite)

🎨 Plain CSS (BEM Structured)

🧠 JavaScript (ES6+)

💾 LocalStorage for theme persistence
