# The Internet Diary: A Digital Restoration Interface


**The year is 2026. The internet has collapsed.** 

*The Internet Diary* is an immersive, interactive simulation where the user acts as a futuristic researcher tasked with restoring the digital fragments of a lost 50-year diary. By venturing through the timeline of the internet—from the raw signals of the ARPANET in 1969 to the complex algorithms of 2026—users solve interactive puzzles and wipe away digital dust to reconnect humanity's digital soul.

---

## 🏆 Project Evaluation & Core Criteria

This project has been meticulously architected to excel across five core evaluation criteria:

### 1. Creativity & Storytelling -:

*The Internet Diary* is more than a web app; it's a narrative-driven simulation. 
- **The Concept:** A researcher in 2026 restoring the internet's timeline. This gamifies the browsing experience, turning passive reading into an active "restoration mission."
- **The Journey:** Users travel through distinct historical eras (1969 ARPANET, 1990s Web, 2000s Social Media). Each era requires a unique interaction to unlock the next (e.g., tuning a radio frequency to exactly `69MHz` to sync an ARPANET node).

### 2. Visual Design -:

The interface utilizes a sophisticated, unified aesthetic reminiscent of retro-futuristic data terminals and high-end cinematic HUDs (Heads-Up Displays).
- **Aesthetic Harmony:** A deep black canvas paired with antique gold/amber (`text-antique`) typography. 
- **Typography:** Serif, italicized fonts combined with monospace tracker fonts to blend the concepts of a physical "diary" and a digital terminal.
- **Layout:** Extensive use of Tailwind CSS to maintain absolute positioning, dynamic scaling, and centered focal points that keep the user's eye on the critical interaction.

### 3. Animation & Interactivity -:
Every user action is rewarded with fluid visual or auditory feedback.
- **Animations:** Powered heavily by **GSAP**, the application features complex timeline sequencing. Components don't just appear; they fade in from blurs, scale up, or glitch onto the screen.
- **Micro-Interactions:** Custom HTML5 `<canvas>` logic allows users to "wipe away" digital dust using their cursor/finger. 3D objects rendered with **React Three Fiber** auto-rotate and scale dynamically based on interaction states.
- **Audio Integration:** A custom `useAudio` hook leveraging **Howler.js** manages era-specific background static and dynamic sound effects, deeply enhancing the immersion.

### 4. Responsiveness
The simulation adapts seamlessly to any screen size.
- **Cross-Device Usability:** Touch events (`onTouchStart`, `onTouchMove`) have been mapped directly to mouse events so mobile users can "wipe dust" or "tune radios" just as easily.
- **Fluid Layouts:** Using Tailwind's responsive prefixes (`md:`, `lg:`), font sizes, paddings, and 3D container perspectives dynamically shrink and stack down to ensure usability on smaller viewports without breaking the illusion.

### 5. Code Quality
The codebase enforces strict separation of concerns and maintainability.
- **Modular Architecture:** The app is broken down logically into `sections/` (representing each historical component), `components/` (reusable HUDs and toggles), and `hooks/` (reusable logic).
- **State Management:** A clean top-level master state in `App.js` manages progression (`currentEra`, `restorationProgress`) and conditionally renders only the active module, preventing DOM bloat.
- **Performance:** Extensive use of `useMemo` (e.g., in the background Matrix data rain) prevents unnecessary re-renders of complex background UI loops.

---

## 🏗️ Architecture & Technical Design -:

### Tech Stack -:
* **Framework:** React (bootstrapped with Create React App)
* **Animations:** GSAP (`gsap`) & `@gsap/react`
* **3D & Canvas Rendering:** HTML5 Canvas, Three.js (`three`), and React Three Fiber (`@react-three/fiber`)
* **Styling:** Tailwind CSS (utility-first CSS)


### Core Systems -:

1. **The State Machine (`App.js`):** Acts as a router conditionally mounting era components sequentially (Hero -> 1969 -> Diary -> 1980 -> etc.) upon completion of era-specific callbacks.
2. **The HUD (`HUD.js`):** Persistent, translucent overlay providing real-time feedback on restoration progress, current timeline year, and system status across all module mounts.
3. **Era Modules (`src/sections/`):** Self-contained React components encapsulating local logic, GSAP timelines, and unique interaction handlers. 

---

## 🚀 Getting Started

Follow these steps to set up the simulation environment locally.

### Prerequisites
* **Node.js** (v14 or higher recommended)
* **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/britansh-pandey/Internet-Diary.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd Internet-Diary
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

To start the local development server:

```bash
npm start
```
* **Host:** The app will be available at [http://localhost:3000](http://localhost:3000).
* **Audio Note:** The browser's autoplay policy requires an initial user interaction. Click anywhere on the intro screen to unlock the global audio context.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
This minifies the code and optimizes assets inside the `build/` folder, making it ready to deploy to platforms like Vercel, Netlify, or GitHub Pages.
