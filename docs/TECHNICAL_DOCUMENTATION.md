# Technical Documentation

## 1. Tech Stack
- **Core Framework:** React 19.2.0
- **Language:** TypeScript 5.9.x
- **Build Tool:** Vite 7.3.1
- **Styling:** Tailwind CSS (configured via CDN & inline styles inside index.html)

## 2. Architectural Overview
The project has recently undergone a major refactoring from a monolithic architecture (single 500+ line App.tsx) to a clean, Atomic/Modular component architecture.

### 2.1. File Structure
\\\	ext
src/
+-- components/
¦   +-- layout/         # Persistent UI elements spanning all views
¦   ¦   +-- Navbar.tsx
¦   ¦   +-- SideNav.tsx
¦   ¦   +-- Footer.tsx
¦   +-- sections/       # Scrollable screen compartments
¦       +-- Hero.tsx
¦       +-- About.tsx
¦       +-- Projects.tsx
¦       +-- Certificates.tsx
¦       +-- Contact.tsx
+-- data/
¦   +-- index.ts        # Extracted constant data arrays (e.g., certificates list)
+-- App.tsx             # Main aggregator importing layouts and sections
+-- main.tsx            # React application entry point
\\\

## 3. Component Details & Internal Logic

### 3.1. Layout Wrapping
- **Navbar.tsx:** Implements a custom "Scroll Spy" using React's useEffect and useState. It listens to the window.scrollY event, calculates offsets of section containers (e.g., #about, #projects), and dynamically shifts the active styling (yellow border/text) based on the user's viewport.
- **SideNav.tsx & Footer.tsx:** Stateless functional components providing aesthetic framing and external links.

### 3.2. State Management (Sections)
- **Certificates.tsx:** Relies on local React state (useState) to toggle between the active certificate. The certificates array is imported cleanly from src/data/index.ts. Clicking an item in the left grid updates the ctiveCert hook, causing the central "display pedestal" to re-render with the corresponding image, description, and link.

### 3.3. Asset Management
- Standard images and sprites (like kazukid1.jpg, logoweb.png, company1.png) are stored directly in the public/ directory, allowing straightforward relative path referencing in the codebase (e.g., <img src="/kazukid1.jpg" />).
- Obsolete files (like Vite base SVG, App.css, index.css) have been pruned to keep the bundle footprint minimal.

## 4. Styling Methodology (JRPG CSS)
To achieve the 16-bit aesthetic without external libraries, the app utilizes highly customized Tailwind arbitrary classes and raw CSS.

### 4.1. Core Palette
- **Deep Blue Foundation:** #002367, #131b2e
- **Gold/Status Highlights:** #e9c349
- **Pastel Blue Text:** #b4c5ff, #dae2fd

### 4.2. Custom CSS Engine (index.html)
The <head> contains specific configurations:
- **Scanlines:** .scanline-overlay utilizes linear-gradients to emulate retro CRT monitor scanlines.
- **Animations:** .animate-bob and .animate-float simulate standard RPG sprite idling behaviors.
- **Typography:** Uses Google Fonts Space Grotesk (for blocky headlines and UI elements) and Manrope (for general reading text).

## 5. Build & Deployment
The project is built specifically to be deployed as static HTML/JS/CSS.
- **Command:** 
pm run build (executes 	sc -b && vite build)
- **Output:** Stored in the /dist directory. The footprint is extremely lightweight since CSS is managed cleanly via utility classes.
