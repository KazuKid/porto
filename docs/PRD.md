# Product Requirements Document (PRD)

## 1. Product Overview
**Project Name:** HERO'S LEDGER (Porto)
**Product Type:** Single-Page Application (SPA) Personal Portfolio
**Theme:** 16-bit JRPG (Japanese Role-Playing Game) Interface

HERO'S LEDGER is a highly stylized, interactive personal portfolio website for Mohammad Rivaldy Yusup (Kazukid). Designed with a nostalgic retro RPG aesthetic, it aims to present professional achievements—such as skills, projects, and certificates—in an engaging, gamified format. This document reflects the current production state of the project.

## 2. Objectives
### Primary Goals
- Provide a unique digital identity that sets the owner apart from standard corporate portfolios.
- Condense professional information (CV, Skills, Projects, Contact) into an entertaining "Quest" format.
- Demonstrate front-end capabilities, specifically in translating complex UI/UX designs into responsive React components without external UI libraries.

### Success Metrics
- Visitors can intuitively navigate the "RPG Menu" to find relevant professional data.
- Achieving a fully responsive layout across desktop and mobile devices.
- Seamless deployment as a static site via modern hosting platforms (Vercel/Netlify/GitHub Pages).

## 3. Target Audience
- **Recruiters & HR:** Seeking clear, verifiable information about skills and history.
- **Hiring Managers / Tech Leads:** Examining code structure, UI architecture, and creativity.
- **Fellow Developers / Geeks:** Appreciating the deep technical aesthetic and video game references.

## 4. Product Features & Scope
The application is structured sequentially as a single-page scrolling experience, divided into the following "Sections":

### 4.1. Layout & Navigation
- **Top Navbar:** Features dynamic Scroll-Spy functionality, automatically highlighting the current section the user is viewing.
- **Side Command (SideNav):** A fixed "Command Menu" containing social links (LinkedIn, GitHub, Discord).
- **Status Bar (Footer):** Displays vital "stats" like HP/MP mimicking an RPG HUD.

### 4.2. Sections
1. **Hero (Home / New Game):** Introduces the "Main Character" (Mohammad Rivaldy Yusup) at LVL 99, featuring a retro avatar (\kazukid1.jpg\), EXP bars for core skills, and quick action buttons.
2. **About (Character Profile):** Displays a biography inside a dialogue box, STR/INT/AGI stat bars, and a 6-slot inventory grid showing specific tools/skills (Web Dev, Prompt Eng, etc.).
3. **Projects (Quest Log):** A gallery of completed missions (projects like Company Web Profile and E-Commerce Realm). The interface removes excessive clutter and focuses on clean thumbnail presentations and action buttons (Fast Travel, Inspect).
4. **Certificates (Quest Artifacts):** An interactive grid system displaying earned certificates. Clicking an item in the inventory dynamically updates the central display pedestal using React State.
5. **Contact (Save Screen):** A thematic form allowing users to send messages, stylized as "saving the game" or transmitting data via an owl courier.

## 5. Technical Constraints
- Must remain a lightweight Single Page Application.
- Avoid heavy CSS frameworks like Bootstrap; prioritize Tailwind CSS for granular utility-first styling.
- Must maintain strict 16-bit visual rules: specific color palettes (\#002367\, \#e9c349\), sharp borders, blocky fonts, and no anti-aliased shadows where possible.
