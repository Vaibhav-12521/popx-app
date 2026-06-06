# PopX — React JS Assignment

A pixel-perfect implementation of the **PopX** mobile app interface, built in
React JS from the provided Adobe XD design. The mobile interface stays centered
on the webpage and navigation between pages is handled with React Router.

## Screens

| Route        | Screen                                          |
| ------------ | ----------------------------------------------- |
| `/`          | Welcome — Create Account / Already Registered   |
| `/login`     | Sign in to your PopX account                    |
| `/register`  | Create your PopX account                        |
| `/account`   | Account Settings (profile)                      |

Navigation flow: **Welcome → Create Account / Login → Account Settings.**
The name/email entered on the Login or Create Account screens is carried over
to the Account Settings screen.

## Tech stack

- **React 18** + **Vite** — fast, modern build tooling
- **React Router v6** — seamless client-side page navigation
- **CSS Modules** — scoped, hand-written CSS for pixel-perfect styling
- **Rubik** font (Google Fonts) — matching the design typography

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build into /dist
npm run preview # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── MobileFrame.jsx        # 375px centered mobile frame
│   ├── FloatingInput.jsx      # reusable floating-label input
│   └── FloatingInput.module.css
├── pages/
│   ├── Welcome.jsx
│   ├── Login.jsx
│   ├── CreateAccount.jsx
│   └── AccountSettings.jsx
├── App.jsx                    # routes
├── main.jsx                   # entry + router
└── index.css                  # design tokens + global styles
```

## Deployment

Hosted on Vercel. The production build is fully static (`npm run build` → `/dist`).
