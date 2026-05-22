
  # Kuppi Manager

A modern React-based workshop and event management application designed to help organize and discover learning sessions (Kuppis).

## Overview

Kuppi Manager is an event management platform that allows users to browse upcoming workshops, view detailed event information, and manage their learning schedules. The application provides a clean, intuitive interface for discovering educational sessions with details such as timing, instructors, and meeting links.

## Features

- **Event Discovery**: Browse upcoming workshops and learning sessions
- **Event Details**: View comprehensive information about each event including:
  - Event title and description
  - Scheduled date and time
  - Instructor information
  - Meeting links (Zoom, etc.)
- **Quick Actions**: Share events and add them to your calendar
- **Responsive Design**: Works seamlessly across different device sizes

## Tech Stack

- **Frontend Framework**: React 18.2.0 with TypeScript
- **Routing**: React Router DOM v6
- **UI Components**: React Bootstrap
- **Styling**: Tailwind CSS with PostCSS
- **Build Tool**: Create React App with react-scripts 5.0.1

## Prerequisites

- Node.js 12.0 or higher ([Download](https://nodejs.org/en/download/))
- npm 6.0 or higher (included with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rtweera/kuppi-manager.git
cd kuppi-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open automatically at `http://localhost:3000`

## Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode with live reloading.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

### Eject
```bash
npm run eject
```
Ejects from Create React App (this is a one-way operation).

## Project Structure

```
kuppi-manager/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components (full page views)
│   ├── App.tsx         # Main application component
│   ├── App.css         # Application styles
│   ├── index.tsx       # Application entry point
│   └── typings.d.ts    # TypeScript type definitions
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

For detailed information about the project architecture, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## Components

### Header
Displays the application header with a search bar for event discovery.

### SearchContainer
Shows detailed information about a specific event with event details, timing, and quick action buttons.

### LeadershipCard
A reusable card component for displaying event summaries in list format.

For detailed component documentation, see [COMPONENTS.md](./COMPONENTS.md).

## Development Guide

### Running in Development Mode

1. Ensure all dependencies are installed:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. The app will automatically open in your browser and reload when you make changes.

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Tailwind CSS for styling
- Bootstrap components for consistent UI elements

### Debugging

- Use the React Developer Tools browser extension for debugging React components
- Browser DevTools are available with F12 or right-click → Inspect
- Console errors and warnings will appear in the browser console

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The build folder contains the optimized version ready for deployment.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

## Deployment

The application can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository and deploy from the `main` branch
- **Vercel**: Import the project and configure build settings
- **Traditional Hosting**: Copy the `build/` folder to your web server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port 3000 Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
PORT=3001 npm start
```

### Module Not Found Errors
Clear node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

### Build Fails
Ensure you're using a compatible Node.js version:
```bash
node --version  # Should be 12.0 or higher
```

## License

This project is private and proprietary.

## Support

For issues, questions, or suggestions, please open an issue on the project repository or contact the development team.

## Related Documentation

- [Architecture Documentation](./ARCHITECTURE.md)
- [Component Documentation](./COMPONENTS.md)
- [Contributing Guidelines](./CONTRIBUTING.md)
  