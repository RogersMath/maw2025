# Philosophy OER Project

An interactive Open Educational Resource for exploring philosophical frameworks.

## Overview

This project demonstrates how Artificial Intelligence can help educators produce and share valuable educational materials more quickly and easily than is possible through traditional publishers. Created for Math Awareness Week 2025, it showcases interactive tools for understanding philosophical frameworks and their relationships.

## Features

- **Philosophical Frameworks Database**: A searchable, sortable database of major philosophical frameworks with detailed information about each
- **Philosophy Comparison Matrix**: Interactive tool for comparing philosophical frameworks across various dimensions
- **Responsive Design**: Works on desktop and mobile devices
- **Open Source**: Available for educational use and adaptation

## Technology Stack

- React
- Vite
- React Router
- Tailwind CSS
- GitHub Pages

## Development

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/rogersmath/maw2025.git
   cd maw2025
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173/maw2025/`

### Building for Production

```
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the main branch.

To manually deploy:

1. Build the project:
   ```
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

## Project Structure

```
maw2025/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow for deployment
├── public/
│   └── favicon.ico          # Website favicon
├── src/
│   ├── components/
│   │   ├── philosophies.jsx     # Philosophy Frameworks component
│   │   └── philosophyComparisons.jsx  # Philosophy Comparison Matrix component
│   ├── pages/
│   │   ├── Home.jsx         # Homepage
│   │   ├── About.jsx        # About the project
│   │   ├── Frameworks.jsx   # Page that loads the philosophies component
│   │   ├── Comparisons.jsx  # Page that loads the philosophyComparisons component
│   │   └── Resources.jsx    # Additional resources page
│   ├── App.jsx              # Main application component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML entry point
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## Created By

Jesse Rogers, Learning Lab Coordinator at Palm Beach State College.

## License

This project is available under the MIT License. See the LICENSE file for more details.