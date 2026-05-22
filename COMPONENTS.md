# Component Documentation

This document provides detailed information about all React components used in the Kuppi Manager application.

## Table of Contents
1. [App Component](#app-component)
2. [Pages](#pages)
3. [Components](#components)

## App Component

### App (App.tsx)

**Purpose**: Root application component that manages routing and global navigation effects.

**Location**: `src/App.tsx`

**Imports**:
```typescript
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import { useEffect } from "react";
```

**Features**:
- Route configuration and rendering
- Automatic scroll-to-top on navigation
- Dynamic page title and meta description management
- Navigation type detection

**Key Hooks**:
- `useNavigationType()`: Detects the type of navigation (POP, PUSH, REPLACE)
- `useLocation()`: Gets current location information
- `useEffect()`: Manages side effects for scroll and page title

**Route Configuration**:
| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Main` | Main event discovery page |

**Code Flow**:
1. Gets current navigation action and location
2. Scrolls to top on non-POP navigation
3. Updates page title and meta description based on pathname
4. Renders routes

**Props**: None (Root component)

**Example Usage**:
```typescript
function App() {
  // ... hook usage and effects ...
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
```

---

## Pages

### Main (pages/Main.tsx)

**Purpose**: Displays the main event discovery interface with featured event and event listings.

**Location**: `src/pages/Main.tsx`

**Component Type**: Functional Component with no props

**Layout**:
- Full width container with 844px height
- White background
- Flexbox column layout
- 15px gap between elements
- Centered content with overflow hidden

**Child Components**:
1. `Header` - Top navigation bar
2. `SearchContainer` - Featured event details
3. `LeadershipCard` - Event summary cards (x5)

**Events Displayed**:
1. Leadership Qualities - Tomorrow, 10:00 AM, Sep 30, 2023
2. Inheritance - Monday, 1:30 PM, Oct 1, 2023
3. Marketing - Next week, 11:30 PM, Oct 8, 2023
4. CPU scheduling - After 2 weeks, 7:45 AM, Oct 15, 2023
5. Class Diagrams - Next month, 11:30 PM, Oct 1, 2023

**Example Usage**:
```typescript
const Main: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[844px] overflow-hidden flex flex-col items-center justify-start gap-[15px]">
      <Header />
      <SearchContainer />
      <LeadershipCard
        componentText="Leadership Qualities"
        scheduleDate="Tomorrow"
        timeSlotLabel="10.00 AM"
        eventDate="Sep 30, 2023"
        vectorImageName="/vector-5.svg"
      />
      {/* More LeadershipCard instances... */}
    </div>
  );
};
```

---

## Components

### Header (components/Header.tsx)

**Purpose**: Displays the application header with search functionality and user profile options.

**Location**: `src/components/Header.tsx`

**Component Type**: Functional Component (no props)

**Imports**:
```typescript
import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
```

**Features**:
- Responsive header layout
- Search input field
- Search icon
- User profile icon placeholder
- Bootstrap styling integration

**Layout Structure**:
```
┌─────────────────────────────────────────┐
│ [Menu]  [Search Bar]         [Profile]  │
│         (with search icon)               │
└─────────────────────────────────────────┘
```

**Dimensions**:
- Width: 390px
- Height: 70px
- Background: gainsboro-100

**Interactive Elements**:
- Menu button (Bootstrap outline-primary variant)
- Search input field
- Profile icon placeholder

**Styling**:
- Tailwind CSS for layout
- Bootstrap for button styling
- Absolute positioning for precise element placement
- Font: Inter with size 14px

**Props**: None

**Example Usage**:
```typescript
const Header: FunctionComponent = () => {
  return (
    <div className="relative w-[390px] h-[70px] text-left text-sm text-gray-100 font-inter">
      {/* Header content... */}
    </div>
  );
};
```

**Accessibility Notes**:
- Add ARIA labels to buttons
- Add placeholder text to search input
- Consider keyboard navigation

---

### SearchContainer (components/SearchContainer.tsx)

**Purpose**: Displays comprehensive details about a featured or selected event.

**Location**: `src/components/SearchContainer.tsx`

**Component Type**: Functional Component (no props)

**Features**:
- Event title and description
- Instructor/organizer name
- Module/topic information
- Scheduled date and time
- Zoom meeting link
- Share button
- Add to calendar button
- Event vector icon

**Hardcoded Event Data**:
- **Title**: Introduction to Searching
- **Instructor**: Janindu Attanayaka
- **Module**: Modern Approach to AI
- **Date**: Monday, Sep 29, 2023
- **Time**: 10:00 AM (Today)
- **Meeting Link**: Zoom URL provided

**Layout Dimensions**:
- Width: 350px
- Height: 280px
- Background: gainsboro-100

**Action Buttons**:
1. **Add to Calendar**: 161px wide, 40px height
2. **Share**: 98px wide, 40px height

**Styling**:
- Tailwind CSS utility classes
- Absolute positioning for layout precision
- Bootstrap whitesmoke/silver colors
- Small text styling (12px, 13px)

**Props**: None (currently uses hardcoded data)

**Future Enhancement Opportunity**:
Convert to accept props for dynamic event data:
```typescript
type SearchContainerProps = {
  title?: string;
  instructor?: string;
  module?: string;
  date?: string;
  time?: string;
  zoomLink?: string;
  onShare?: () => void;
  onAddCalendar?: () => void;
};
```

**Example Usage**:
```typescript
const SearchContainer: FunctionComponent = () => {
  return (
    <div className="relative w-[350px] h-[280px] text-left text-sm text-black font-inter">
      {/* Event details... */}
      <div className="absolute top-[12px] left-[17px] text-xl font-medium">
        Introduction to Searching
      </div>
      {/* More content... */}
    </div>
  );
};
```

**Accessibility Considerations**:
- Add proper button labels
- Include alt text for images
- Add ARIA labels for icon buttons
- Ensure sufficient color contrast

---

### LeadershipCard (components/LeadershipCard.tsx)

**Purpose**: Reusable component for displaying event summary cards in a list format.

**Location**: `src/components/LeadershipCard.tsx`

**Component Type**: Functional Component with TypeScript Props

**Props Interface**:
```typescript
type LeadershipCardType = {
  componentText?: string;           // Event title
  scheduleDate?: string;            // When the event is scheduled (e.g., "Tomorrow", "Monday")
  timeSlotLabel?: string;           // Time of the event (e.g., "10.00 AM")
  eventDate?: string;               // Full date (e.g., "Sep 30, 2023")
  vectorImageName?: string;         // Path to vector icon image
  propWidth?: CSSProperties["width"]; // Optional custom width for scheduleDate text
};
```

**Dimensions**:
- Width: 350px
- Height: 70px
- Background: gainsboro-100

**Layout Structure**:
```
┌──────────────────────────────────────────┐
│ Leadership Qualities    [Icon]          │
│ Tomorrow    10:00 AM    Sep 30, 2023    │
└──────────────────────────────────────────┘
```

**Content Positions** (absolute positioning):
| Element | Top | Left | Width | Height | Font Size |
|---------|-----|------|-------|--------|-----------|
| Title (componentText) | 13px | 20px | - | - | 20px (font-medium) |
| Schedule Date | 44px | 20px | 70px | 22px | 14px |
| Time Slot | 44px | 129px | 70px | 22px | 14px (centered) |
| Event Date | 44px | 211px | 93px | 22px | 14px (right-aligned) |
| Vector Icon | 27.7px | 316.6px | 23.81px | 17.16px | - |

**Props Examples**:

**Basic Usage**:
```typescript
<LeadershipCard
  componentText="Leadership Qualities"
  scheduleDate="Tomorrow"
  timeSlotLabel="10.00 AM"
  eventDate="Sep 30, 2023"
  vectorImageName="/vector-5.svg"
/>
```

**With Custom Width**:
```typescript
<LeadershipCard
  componentText="Inheritance"
  scheduleDate="Monday"
  timeSlotLabel="1.30 PM"
  eventDate="Oct 1, 2023"
  vectorImageName="/vector-5.svg"
  propWidth="70px"  // Custom width for schedule date
/>
```

**Key Features**:
- **Flexible Width**: scheduleDate text width can be customized
- **Reusable**: Used 5 times in Main page with different data
- **Styling**: Consistent use of Tailwind CSS and font-inter
- **Icons**: Vector icon display with hardcoded positioning

**Hooks Used**:
```typescript
const tomorrowStyle: CSSProperties = useMemo(() => {
  return {
    width: propWidth,
  };
}, [propWidth]);
```

**Styling Details**:
- Font Family: Inter
- Colors: Black text on gainsboro-100 background
- Text alignment: Left (title), Center (time), Right (date)
- Absolute positioning for precise layout

**Usage in Main Component**:
The Main page renders this component 5 times with different data:

```typescript
<LeadershipCard
  componentText="Leadership Qualities"
  scheduleDate="Tomorrow"
  timeSlotLabel="10.00 AM "
  eventDate="Sep 30, 2023"
  vectorImageName="/vector-5.svg"
/>
<LeadershipCard
  componentText="Inheritance"
  scheduleDate="Monday"
  timeSlotLabel="1.30 PM"
  eventDate="Oct 1, 2023"
  vectorImageName="/vector-5.svg"
  propWidth="70px"
/>
```

**Accessibility Notes**:
- Event title should be semantic heading
- Icon should have alt text describing event
- Consider adding clickable area for event details

**Future Enhancements**:
- Add onClick handler to navigate to event details
- Add hover effects for better UX
- Add click-to-expand for additional details
- Make vector icon interactive
- Add truncation for long event titles

---

## Component Hierarchy Diagram

```
App (App.tsx)
│
├── Routes
│   │
│   └── Route (path="/")
│       │
│       └── Main (pages/Main.tsx)
│           │
│           ├── Header (components/Header.tsx)
│           │   └── Bootstrap Button
│           │
│           ├── SearchContainer (components/SearchContainer.tsx)
│           │   ├── Bootstrap-styled buttons
│           │   └── Image icons
│           │
│           └── LeadershipCard (components/LeadershipCard.tsx) x5
│               └── Image icons
```

---

## Component State Management

**Current Approach**: Props-based data flow

**State Usage**:
- No Redux or Context API
- Data is passed through props
- Component state limited to styling (useMemo for computed styles)

**Recommendations**:
- Use Context API for theme/dark mode if needed
- Implement Redux for complex state if adding features
- Consider Zustand for simpler state management

---

## Styling System

### Tailwind CSS Classes Used

**Layout**:
- `relative`, `absolute`: Positioning
- `w-[value]`, `h-[value]`: Width and height
- `flex`, `flex-col`: Flexbox layout
- `items-center`, `justify-start`: Alignment
- `gap-[value]`: Spacing between elements
- `overflow-hidden`: Clip overflow

**Colors**:
- `bg-white`, `bg-gainsboro-100`: Backgrounds
- `text-black`, `text-gray-100`: Text colors
- `border-black`: Borders

**Typography**:
- `text-left`, `text-right`, `text-center`: Text alignment
- `font-inter`: Font family
- `font-medium`, `font-light`: Font weight
- `text-sm`, `text-xl`, `text-7xl`: Font size

**Effects**:
- `rounded-8xs`, `rounded-[50%]`: Border radius
- `box-border`: Box sizing
- `inline-block`: Display

---

## Best Practices

1. **Component Props**: Use TypeScript interfaces for type safety
2. **Styling**: Prefer Tailwind utilities over CSS files
3. **Reusability**: Extract repeated patterns into components
4. **Performance**: Use useMemo for computed styles
5. **Accessibility**: Add proper ARIA labels and semantic HTML

---

## Common Patterns

### Absolute Positioning Pattern
Most components use absolute positioning for precise layout control:
```typescript
<div className="absolute top-[13px] left-[20px] text-xl font-medium">
  {title}
</div>
```

### Props with Optional Styling
```typescript
const style: CSSProperties = useMemo(() => {
  return { width: propWidth };
}, [propWidth]);
```

### Bootstrap Component Integration
```typescript
import { Button } from "react-bootstrap";
<Button className="w-[26px]" variant="outline-primary" />
```

---

## Testing Considerations

**Components to Test**:
1. LeadershipCard: Verify props are rendered correctly
2. SearchContainer: Test button clicks and data display
3. Header: Test search input and button interactions
4. Main: Test component integration

**Example Test Structure**:
```typescript
describe('LeadershipCard', () => {
  it('should render with provided props', () => {
    render(
      <LeadershipCard
        componentText="Test Event"
        scheduleDate="Tomorrow"
        timeSlotLabel="10:00 AM"
        eventDate="Sep 30, 2023"
      />
    );
    expect(screen.getByText('Test Event')).toBeInTheDocument();
  });
});
```
