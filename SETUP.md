# Kuppi Manager - Setup & Installation Guide

This guide provides detailed instructions for setting up and running the Kuppi Manager application.

## Table of Contents

- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Development Setup](#development-setup)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Troubleshooting](#troubleshooting)
- [IDE Setup](#ide-setup)

## System Requirements

### Required

- **Node.js**: Version 12.0 or higher
  - Download: https://nodejs.org/en/download/
  - Verify: `node --version`
- **npm**: Version 6.0 or higher (included with Node.js)
  - Verify: `npm --version`
- **Git**: Version 2.0 or higher
  - Download: https://git-scm.com/downloads
  - Verify: `git --version`

### Recommended

- **Visual Studio Code**: Latest version
  - Download: https://code.visualstudio.com/download
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

### Operating Systems

- Windows 10 or higher
- macOS 10.12 or higher
- Linux (Ubuntu 18.04 or equivalent)

## Installation

### Step 1: Clone the Repository

#### Using HTTPS

```bash
git clone https://github.com/rtweera/kuppi-manager.git
cd kuppi-manager
```

#### Using SSH

```bash
git clone git@github.com:rtweera/kuppi-manager.git
cd kuppi-manager
```

#### Using GitHub CLI

```bash
gh repo clone rtweera/kuppi-manager
cd kuppi-manager
```

### Step 2: Install Dependencies

```bash
npm install
```

This command will:
- Download all required packages
- Install React, TypeScript, Tailwind CSS, and other dependencies
- Create a `node_modules` directory
- Generate a `package-lock.json` file

**Expected output**:
```
added XXX packages in Xs
```

### Step 3: Verify Installation

```bash
npm start
```

The application should:
- Compile successfully
- Open automatically at `http://localhost:3000`
- Display the Kuppi Manager home page

## Development Setup

### Visual Studio Code Setup

#### 1. Install Recommended Extensions

Install these extensions for better development experience:

1. **ES7+ React/Redux/React-Native snippets**
   - ID: `dsznajder.es7-react-js-snippets`
   - Provides React/JSX snippets

2. **Prettier - Code formatter**
   - ID: `esbenp.prettier-vscode`
   - Auto-formats code on save

3. **ESLint**
   - ID: `dbaeumer.vscode-eslint`
   - Identifies and reports code issues

4. **Tailwind CSS IntelliSense**
   - ID: `bradlc.vscode-tailwindcss`
   - Autocomplete for Tailwind classes

5. **Thunder Client** or **REST Client**
   - For testing API endpoints (if backend integration is added)

#### 2. Configure Settings

Create or update `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

#### 3. Launch Configuration

Create `.vscode/launch.json` for debugging:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "attach",
      "port": 9333,
      "pathMapping": {
        "/": "${workspaceRoot}/",
        "/static/js/": "${workspaceRoot}/src/"
      }
    }
  ]
}
```

### npm Dependencies Overview

| Package | Version | Purpose |
|---------|---------|---------|
| react | 18.2.0 | UI library |
| react-dom | 18.2.0 | React DOM rendering |
| react-router-dom | 6.16.0 | Client-side routing |
| typescript | 4.5.4 | Type safety |
| tailwindcss | 3.1.8 | Utility CSS |
| react-bootstrap | 2.8.0 | Bootstrap components |
| bootstrap | 5.1.3 | Bootstrap framework |

## Running the Application

### Development Mode

```bash
npm start
```

**Features**:
- Hot reload on file changes
- Source maps for debugging
- Fast compilation
- Opens at `http://localhost:3000`

**To stop**: Press `Ctrl+C` (or `Cmd+C` on Mac)

### Change Port

If port 3000 is already in use:

```bash
PORT=3001 npm start
```

### Testing Mode

```bash
npm test
```

**Features**:
- Interactive test runner
- Watch mode enabled by default
- Jest testing framework

**Common test commands**:
- `a` - Run all tests
- `p` - Filter by filename
- `t` - Filter by test name
- `q` - Quit watch mode
- `Enter` - Re-run failed tests

### Continuous Integration Check

```bash
npm run build
```

Verifies that production build succeeds without errors.

## Building for Production

### Create Production Build

```bash
npm run build
```

**What happens**:
1. Compiles TypeScript
2. Bundles and minifies JavaScript
3. Optimizes CSS
4. Generates source maps
5. Creates `build/` directory

**Build output**:
```
The build folder is ready to be deployed.
Find out more information at: https://cra.link/deployment
```

### Build Folder Structure

```
build/
├── static/
│   ├── css/
│   │   ├── main.xxxxxxxx.css
│   │   └── main.xxxxxxxx.css.map
│   ├── js/
│   │   ├── main.xxxxxxxx.js
│   │   ├── main.xxxxxxxx.js.map
│   │   └── (other chunks)
│   └── media/
│       └── (images, fonts, etc.)
├── index.html
├── favicon.ico
└── manifest.json
```

### Test Production Build Locally

```bash
npm install -g serve
serve -s build
```

Opens build at `http://localhost:3000`

## Troubleshooting

### npm install fails

**Error**: `npm ERR! code EACCES`

**Solution**:
```bash
# Option 1: Use sudo (not recommended)
sudo npm install

# Option 2: Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
npm install
```

### Port 3000 already in use

**Error**: `Port 3000 is already in use`

**Solutions**:
```bash
# Option 1: Use different port
PORT=3001 npm start

# Option 2: Find and kill process using port
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

### Module not found errors

**Error**: `Cannot find module 'react'`

**Solution**:
```bash
# Clear cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Compilation errors

**Error**: `TS2345: Type 'something' is not assignable to type 'something else'`

**Solution**:
1. Check TypeScript errors in terminal
2. Verify prop types match component interface
3. Ensure imports are correct
4. Check for typos in type definitions

### Build optimization

If build is slow:

```bash
# Check bundle size
npm install -g webpack-bundle-analyzer

# Analyze build
npm run build -- --analyze

# Remove large dependencies if needed
npm ls
```

### Browser issues

**Page not loading**:
1. Check browser console for errors (F12)
2. Verify server is running (`npm start`)
3. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Clear browser cache

**Styling issues**:
1. Clear Tailwind cache: `npx tailwindcss -i ./src/index.css -o ./build/global.css`
2. Restart dev server
3. Check browser DevTools for CSS errors

### Debugging TypeScript

**VSCode debugging**:
1. Set breakpoints (click on line number)
2. Open Debug view (Ctrl+Shift+D)
3. Select "Chrome" configuration
4. Click Run button
5. Interact with app to hit breakpoints

**DevTools debugging**:
1. Open DevTools (F12)
2. Go to Sources tab
3. Find source files in webpack://
4. Set breakpoints
5. Refresh page

## IDE Setup

### WebStorm / IntelliJ IDEA

1. Open project in WebStorm
2. Configure Node interpreter:
   - Settings → Languages & Frameworks → Node.js and NPM
   - Set interpreter path
3. Configure TypeScript:
   - Settings → Languages & Frameworks → TypeScript
   - Set TypeScript language service
4. Enable ESLint:
   - Settings → Languages & Frameworks → JavaScript → Linters → ESLint
   - Check "Enable ESLint"

### Sublime Text 3

1. Install packages:
   - Package Control → Install Package
   - Install "Babel", "TypeScript", "Tailwind CSS"

2. Configure project:
   - Project → Edit Project

3. Set build system:
   - Tools → Build System → New Build System
   - Configure npm scripts

### Atom

1. Install packages:
   ```bash
   apm install ide-typescript atom-typescript react
   ```

2. Configure linting:
   ```bash
   apm install linter eslint
   ```

## Next Steps

1. **Read Architecture**: Review [ARCHITECTURE.md](./ARCHITECTURE.md)
2. **Study Components**: Check [COMPONENTS.md](./COMPONENTS.md)
3. **Contributing**: See [CONTRIBUTING.md](./CONTRIBUTING.md)
4. **Start Development**: Make your first changes!

## Quick Reference

### Common Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Start dev server |
| `npm test` | Run tests |
| `npm run build` | Create production build |
| `npm install [package]` | Install new package |
| `npm install -D [package]` | Install dev dependency |
| `npm update` | Update all packages |
| `npm audit` | Check for vulnerabilities |

### Useful Keyboard Shortcuts

**VS Code**:
- `Ctrl+Shift+D` - Debug panel
- `Ctrl+`` - Terminal
- `Ctrl+/` - Toggle comment
- `F12` - Open DevTools

**Browser**:
- `F12` - DevTools
- `Ctrl+Shift+I` - Inspect element
- `Ctrl+Shift+C` - Element picker
- `Ctrl+Shift+J` - Console

## Getting Help

1. **Check Existing Issues**: https://github.com/rtweera/kuppi-manager/issues
2. **Read Documentation**: Review README and documentation files
3. **Browser Console**: Check for error messages
4. **Stack Overflow**: Search for error messages
5. **GitHub Discussions**: Open a discussion in the repository

## Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Create React App Documentation](https://create-react-app.dev/)

---

**Last Updated**: 2024
**For more info**: Check README.md and other documentation files
