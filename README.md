# Vortex AI – Predictive Business Intelligence Dashboard

Vortex AI is a cutting-edge dashboard designed for 2026 performance standards. Built on **Astro 6**, it leverages a **Zero-JS baseline** with highly interactive **React 19 Islands** for real-time data visualization.

## 🚀 Key Features

- **Zero-Hydration Shell**: Global layout (sidebar & navbar) ships 0KB of JavaScript by default.
- **The "Pulse" Island**: Real-time Predictive Revenue feed with a pulsing AI Status indicator using **Framer Motion**.
- **Bento Grid Dashboard**: A responsive 4-column layout featuring:
  - **Market Velocity vs. Growth**: Multi-line shaded Area Charts powered by **Recharts**.
  - **Smart Insights**: Auto-scrolling AI feedback messages with smooth transitions.
  - **KPI Widgets**: ARR, LTV, and Churn metrics with mini-sparkline visualizations.
- **High-End Aesthetics**: "Midnight Obsidian" theme (#020617) with "Volt Green" and "Deep Violet" accents.

## 🛠️ Tech Stack

- **Framework**: Astro 6 (Main architecture)
- **UI Architecture**: React 19 (Interactive islands)
- **Styling**: Tailwind CSS v4 (Oxide engine)
- **Icons**: Lucide-React
- **Animations**: Framer Motion
- **Data Vis**: Recharts / Tremor

## 📦 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run in development mode**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build**:
   ```bash
   npm run preview
   ```

## 📈 Performance

Vortex AI is optimized for performance, achieving near-perfect Lighthouse scores by utilizing Astro's **Partial Hydration** (`client:visible`). Only the interactive visual components load JavaScript when they enter the viewport.
