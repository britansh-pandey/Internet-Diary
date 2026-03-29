# Internet Diary

Internet Diary is an immersive, interactive 3D web experience built with React, Three.js, and GSAP. It takes users on a visual journey through different eras of the internet, featuring specialized 3D scenes and animations for each period.

## Tech Stack

* **Frontend Framework:** React (bootstrapped with Create React App)
* **3D Graphics & Rendering:** Three.js, React Three Fiber (`@react-three/fiber`), React Three Drei (`@react-three/drei`)
* **Animations:** GSAP & `@gsap/react`
* **Styling:** Tailwind CSS
* **Audio:** Howler.js for interactive sound design
* **Icons:** Lucide React

## Folder Structure

```
internet-diary/
├── public/                 # Static assets
└── src/                    # Application source code
    ├── components/         # Reusable UI elements (e.g., HUD, SoundToggle)
    ├── hooks/              # Custom React hooks (e.g., useAudio)
    ├── sections/           # Components for distinct timeline eras (e.g., Era1969, Era1990)
    │   ├── DiaryPage, Diary90, Diary2000...
    │   └── Era1969, Era1980, Era1990, Era2000, Era2016, Era2021, Era2026, Hero...
    ├── App.js              # Main application entry point and routing
    ├── App.css             # Main application styling
    ├── index.js            # React DOM rendering
    └── index.css           # Global stylesheet and Tailwind imports
```

## Getting Started

### Prerequisites

* Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/britansh-pandey/Internet-Diary.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Internet-Diary
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App Locally

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Available Scripts

In the project directory, you can run:
* `npm start`: Runs the app in development mode.
* `npm test`: Launches the test runner in interactive watch mode.
* `npm run build`: Builds the app for production to the `build` folder.
* `npm run eject`: Ejects the app from the create-react-app setup (one-way operation).
