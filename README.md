# CodePier Development

A Development Platform for Kubernetes Teams

## Quickstart

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Start the app in development mode**
   ```sh
   npm run dev
   ```
   This will launch the Electron app with hot reload.

3. **Typecheck all packages**
   ```sh
   npm run typecheck
   ```

4. **Lint the renderer**
   ```sh
   cd packages/renderer
   npm run lint
   ```

## Project Structure

This project is a monorepo managed with npm workspaces. Main packages:

- `packages/main` – Electron main process
- `packages/preload` – Electron preload scripts
- `packages/renderer` – React-based UI (Vite)
- `packages/electron-versions` – Helper utilities

Each package may have its own scripts and dependencies. Use workspace commands to build, typecheck, or test all packages:

```sh
npm run build        # Build all packages
npm run typecheck    # Typecheck all packages
npm test             # Run end-to-end tests
```

## Additional Commands

- `npm run compile` – Build and package the Electron app for distribution
- `npm run format` – Format codebase with Prettier

---

For more details, see the `package.json` scripts and each package's README (if present).
