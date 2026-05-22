# Kuppi Manager - Architecture Documentation

## Overview

Kuppi Manager is built as a Single Page Application (SPA) using React with TypeScript. The architecture follows modern React best practices with component-based design and routing.

## Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **UI Framework** | React 18.2.0 | Component-based UI development |
| **Language** | TypeScript 4.5.4 | Type-safe JavaScript |
| **Routing** | React Router DOM v6 | Client-side routing |
| **Styling** | Tailwind CSS 3.1.8 | Utility-first CSS framework |
| **UI Components** | React Bootstrap 2.8.0 | Pre-built Bootstrap components |
| **Build Tool** | Create React App 5.0.1 | Development and build tooling |

## Directory Structure

```
kuppi-manager/
├── public/                          # Static assets served directly
│   ├── vector-1.svg
│   ├── vector-5.svg
│   ├── vector-6.svg
│   ├── group-1.svg
│   ├── group-4.svg
│   └── index.html                   # HTML template
├── src/                             # Source code
│   ├── components/                  # Reusable UI components
│   │   ├── Header.tsx              # Application header with search
│   │   ├── SearchContainer.tsx     # Event details container
│   │   └── LeadershipCard.tsx      # Reusable event card component
│   ├── pages/                       # Page-level components
│   │   └── Main.tsx                # Main page with event list
│   ├── App.tsx                      # Root application component
│   ├── App.css                      # Application-level styles
│   ├── index.tsx                    # React entry point
│   ├── index.css                    # Global styles
│   ├── global.css                   # Additional global styles
│   ├── typings.d.ts                # TypeScript type definitions
│   ├── reportWebVitals.tsx         # Performance monitoring
│   └── logo.svg                     # Application logo
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
└── README.md                        # Project documentation
```

## Application Flow

```
Entry Point (index.tsx)
    ↓
React App (App.tsx)
    ├─→ Routes (React Router)
    │    └─→ Main Page (/)
    │         ├─→ Header Component
    │         ├─→ SearchContainer Component
    │         └─→ LeadershipCard Components (Multiple)
```

## Component Architecture

### Component Hierarchy

```
App
└── Main (Page)
    ├── Header
    │   └── Bootstrap Button
    ├── SearchContainer
    └── LeadershipCard (x5)
```

### Component Details

#### App Component (App.tsx)
**Purpose**: Root application component and routing configuration

**Features**:
- Manages routing using React Router
- Handles navigation effects (scroll to top on route change)
- Updates document title and meta descriptions
- Coordinates page-level navigation

**Props**: None
**State**: Uses hooks (useLocation, useNavigationType)

#### Main Page Component (pages/Main.tsx)
**Purpose**: Displays the main event discovery interface

**Features**:
- Renders the header
- Renders the search/featured event container
- Lists multiple event cards
- Fixed layout with 844px height

**Child Components**:
- Header
- SearchContainer
- LeadershipCard (multiple instances)

#### Header Component (components/Header.tsx)
**Purpose**: Top navigation bar with search functionality

**Features**:
- Search bar input field
- Search icon
- User profile icon
- Bootstrap styling for consistency
- Responsive layout with fixed dimensions

**Props**: None
**Styling**: Tailwind CSS with custom spacing and colors

#### SearchContainer Component (components/SearchContainer.tsx)
**Purpose**: Displays detailed information about a featured or selected event

**Features**:
- Event title and description
- Instructor/organizer information
- Date and time information
- Meeting link (Zoom integration)
- Share button
- Add to calendar button
- Event module information

**Props**: None (currently hardcoded data)
**Styling**: Absolute positioning for precise layout control

#### LeadershipCard Component (components/LeadershipCard.tsx)
**Purpose**: Reusable component for displaying event summary cards

**Props**:
```typescript
type LeadershipCardType = {
  componentText?: string;      // Event title
  scheduleDate?: string;       // When (e.g., "Tomorrow", "Monday")
  timeSlotLabel?: string;      // Time (e.g., "10.00 AM")
  eventDate?: string;          // Full date (e.g., "Sep 30, 2023")
  vectorImageName?: string;    // Path to vector icon image
  propWidth?: CSSProperties["width"];  // Optional custom width
};
```

**Features**:
- Flexible width customization
- Multiple event instances with different data
- Consistent styling across event cards

## Routing Configuration

The application uses React Router v6 with a simple routing structure:

```
/ → Main.tsx (Main event discovery page)
```

**Routing Features**:
- Automatic scroll-to-top on navigation
- Dynamic page title and meta description updates
- Single-page application (SPA) architecture

## Styling Strategy

### Tailwind CSS
- Utility-first CSS framework
- Customizable configuration in `tailwind.config.js`
- Used for responsive design and layout

### CSS Modules & Global Styles
- `index.css`: Global reset and base styles
- `App.css`: Application-level styles
- `global.css`: Additional global utilities
- Component styles use Tailwind utilities and inline styles

### Color Palette
- **gainsboro-100/200**: Light gray backgrounds
- **silver-100/200**: Medium gray accents
- **whitesmoke-100/200**: Off-white backgrounds
- **darkgray**: Dark gray text and accents
- **darkslategray**: Dark text for links and content
- **gray-100/200**: Text colors

## Data Flow

### Current State
- **Hardcoded Data**: Event information is currently hardcoded in components
- **Props Passing**: Component data is passed through props
- **No Global State Management**: Currently uses local component state/props

### Recommended Improvements
For future enhancements, consider:
- **State Management**: Redux or Context API for global state
- **Data Fetching**: API integration for dynamic event data
- **Local Storage**: Persist user preferences and selections

## Build and Deployment

### Development Build
```bash
npm start
```
- Hot module reloading
- Source maps for debugging
- Fast compilation

### Production Build
```bash
npm run build
```
- Minified and optimized code
- Tree shaking for unused code removal
- CSS/JS bundling and splitting

## Performance Considerations

### Current Optimizations
- React 18 concurrent features
- Tailwind CSS purging unused styles
- Component-based code splitting ready

### Recommendations
- Implement lazy loading for images
- Add code splitting at route level
- Implement memoization for expensive computations
- Use React DevTools Profiler to identify bottlenecks

## Type Safety

### TypeScript Configuration
- Strict mode enabled for type safety
- JSX support configured
- Module resolution for efficient imports
- Target ES2015+ for modern browser support

### Type Definitions
- `typings.d.ts`: Custom type definitions
- Component prop types defined using TypeScript interfaces
- Example: `LeadershipCardType` interface in LeadershipCard.tsx

## Accessibility

### Current Implementation
- Semantic HTML elements
- Alt text for images
- Proper button and form controls

### Recommendations
- Add ARIA labels where needed
- Implement keyboard navigation
- Add focus management
- Use screen reader testing

## Configuration Files

### tsconfig.json
- Strict type checking enabled
- JSX transformation set to React
- Module resolution for imports
- ES2015 as target

### tailwind.config.js
- Custom theme configuration
- Color palette customization
- Responsive breakpoints
- Plugin configuration

### postcss.config.js
- Tailwind CSS processing
- Autoprefixer for vendor prefixes
- CSS optimization

## Future Architecture Improvements

1. **State Management**: Implement Redux or Context API
2. **API Integration**: Connect to backend for dynamic data
3. **Component Library**: Extract reusable components into a library
4. **Testing**: Add comprehensive unit and integration tests
5. **Documentation**: Generate Storybook for component documentation
6. **Error Boundary**: Implement error handling at component level
7. **Authentication**: Add user authentication and authorization
8. **Caching**: Implement efficient caching strategies

## Security Considerations

- Input validation for form fields
- XSS prevention through React's built-in escaping
- HTTPS for all external resources
- Content Security Policy headers
- Regular dependency updates

## Performance Monitoring

The application includes web vitals monitoring via `reportWebVitals.tsx` for tracking:
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Largest Contentful Paint (LCP)

## Maintenance and Evolution

- Keep dependencies updated
- Monitor bundle size
- Track performance metrics
- Regular code reviews
- Document API changes
- Update this architecture document as needed
