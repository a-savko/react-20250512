# React Application to provide food ordering service

## Description

The repository for the course React v19. The course introduces the basic ideas step by step and explains the most advanced methods of working with React.

It includes creating a modern SPA application using React, configuring Redux, and integrating React Router. At the final stage, the application is migrated to Next.js. Rendering types and optimization techniques are also being explained.

The classic architecture of React applications is described: Unidirectional dataflow, implemented using the Redux library.

It also includes an introduction to framework Next.js, and application optimization knowledge.

### Course Blocks

- React Basics
- Redux
- React Router
- Next.js Framework
- Optimizations

### Project Description

A restaurant selection and food ordering service built using two approaches: based on the Next.js framework and using React + Redux + React Router + Vite.

Note: The app entry point is `src/main.jsx`, and the React app mounts to the `div` with id `root` in `index.html`.

## Prerequisites

- Node.js (<https://nodejs.org/en/>)
- npm (comes with Node.js) or yarn

## Installation

To install the dependencies, run the following command in the project root directory:

```bash
npm install
```

or if you use yarn:

```bash
yarn install
```

## Running the Application

To start the development server, run:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

This will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

To build the app for production, run:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

This will create a `dist` folder with the production build of the app.

To preview the production build locally, run:

```bash
npm run preview
```

or with yarn:

```bash
yarn preview
```

## Folder Structure

- `public/` - Static files and the main HTML file
- `src/` - React components, styles, and other source files

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check code quality

## Additional Resources

- [React documentation](https://react.dev/learn)
- [Материалы для обучения. Курс по React 12.05](https://learn.javascript.ru/courses/groups/react-20250512/materials)
