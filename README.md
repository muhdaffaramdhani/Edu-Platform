# EduPlatform — Run locally

This project contains a React + Tailwind frontend (Vite) and a Django backend (SQLite) for local development.

Quick steps (Windows PowerShell):

1. Open PowerShell and navigate to the project folder (where this README sits).

2. Run the helper script to prepare env and start both servers:

```powershell
.\start_servers.ps1
```

What the script does:
- Creates a Python virtual environment in `backend/.venv` (if missing).
- Installs backend dependencies from `backend/requirements.txt`.
- Runs Django migrations.
- Opens two new PowerShell windows: one runs `python manage.py runserver` (Django), the other runs `npm run dev` (Vite).

Manual alternative:

- Backend:
  - `cd backend`
  - `python -m venv .venv`
  - `.\.venv\Scripts\Activate.ps1`
  - `pip install -r requirements.txt`
  - `python manage.py migrate`
  - `python manage.py runserver`

- Frontend:
  - In project root: `npm install`
  - `npm run dev`

Frontend will run at `http://localhost:5173` and backend API at `http://127.0.0.1:8000`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
