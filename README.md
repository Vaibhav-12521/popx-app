# PopX App

A small React app built from the PopX design as part of a React JS intern task.
It recreates the mobile screens (Welcome, Login, Create Account and Account
Settings) and keeps the phone-sized layout centered on the page.

## Screens

- `/` - Welcome page with Create Account and Login buttons
- `/login` - Sign in to your PopX account
- `/register` - Create a new account
- `/account` - Account settings / profile

The name and email entered on the Login or Create Account page are shown on the
Account Settings page.

## Built with

- React 18
- Vite
- React Router
- CSS Modules

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

To make a production build:

```bash
npm run build
npm run preview
```

## Folder structure

```
src/
  components/   reusable UI (mobile frame, input field)
  pages/        the four screens
  App.jsx       routes
  main.jsx      app entry
  index.css     global styles and colors
```

## Deployment

The app is deployed on Vercel as a static build.
