# Build Tools Project

## 1. Project Overview

This project demonstrates a modern JavaScript/TypeScript workflow using Webpack for bundling, TypeScript for static typing, Sass (SCSS) for styling, ESLint and Prettier for code quality, and Jest for testing. It features code splitting, using dynamic imports for the moment librart, and automated code quality checks with Husky pre-commit hooks.

---

## 2. Setup and Run Instructions

1. *Clone the repository* and navigate to the project directory.
2. *Install dependencies:*

   npm install

3. *Start the development server:*

   npm run dev

   This will start the Webpack dev server and build CSS from Sass.

4. *Build for production:*

   npm run build

   This creates an optimized bundle in the dist directory.

---

## 3. Build Process & Code Quality

### *Webpack*

- Bundles TypeScript and JavaScript files.
- Supports code splitting via dynamic import().
- Outputs source maps for easier debugging.
- Handles both development and production builds with separate configs.

### *TypeScript*

- Provides static typing.
- Configured to support JSON imports and ES module interop.

### *Sass (SCSS)*

- Styles are written in src/styles/main.scss.
- Compiled to CSS using the build-css npm script.

### *Linting Rules*

- Uses ESLint with recommended and TypeScript rules.
- Custom rules: single quotes, semicolons required, warn on unused variables.
- Jest globals are recognized in test files.

### *Formatting Strategy*

- Prettier enforces consistent code formatting (single quotes, semicolons, LF line endings).
- Formatting is integrated with ESLint and run automatically before commits.

---

## 4. Available NPM Scripts

start Start Webpack dev server (development mode)  
 build Build the project for production  
 build-css Compile Sass (SCSS) to CSS  
 dev Run both dev server and build CSS  
 lint Run ESLint on TypeScript files  
 format Format code using Prettier  
 check Run lint and format together  
 test Run Jest tests  
 prepare Set up Husky git hooks  
 precommit Run lint and format before each commit (via Husky)

---

## 5. Testing Information

- *Test Framework:* Jest (with ts-jest for TypeScript support)
- *Test Files:* Place tests in files ending with .test.ts in the src directory.
- *Run Tests:*

  npm test

- *Test Environment:* Uses jest-environment-jsdom for DOM-related tests.

---

## Additional Notes

- *Code Splitting:* Dynamic imports for moment.js ensure only necessary code is loaded.
- *Pre-commit Hook:* Husky runs linting and formatting checks before every commit to maintain code quality.
- *Source Maps:* Enabled for easier debugging in both development and production.

---