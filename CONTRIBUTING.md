# Contributing to Kuppi Manager

Thank you for your interest in contributing to Kuppi Manager! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Code Style Guidelines](#code-style-guidelines)
- [Git Workflow](#git-workflow)
- [Making Changes](#making-changes)
- [Testing](#testing)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/kuppi-manager.git
   cd kuppi-manager
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/rtweera/kuppi-manager.git
   ```
4. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

### Prerequisites

- Node.js 12.0 or higher
- npm 6.0 or higher
- Git
- A code editor (VS Code recommended)

### Initial Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Verify the setup:
   ```bash
   npm start
   ```
   The application should open at `http://localhost:3000`

3. Optional: Set up linting and formatting tools
   ```bash
   npm install --save-dev prettier eslint-plugin-prettier
   ```

## Code Style Guidelines

### TypeScript

- **Type Safety**: Always use TypeScript types for props, state, and variables
- **Interfaces**: Define prop interfaces for components using `type` or `interface`
- **No Any**: Avoid using `any` type; be explicit with types

**Good Example**:
```typescript
type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const CustomButton: FunctionComponent<ButtonProps> = ({ label, onClick, disabled }) => {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
};
```

**Bad Example**:
```typescript
const CustomButton = (props: any) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};
```

### React Components

- **Functional Components**: Use functional components with hooks
- **Component Organization**:
  ```
  1. Imports
  2. Type definitions (Props interface)
  3. Component function
  4. Hooks usage
  5. JSX return
  6. Export
  ```

**Component Template**:
```typescript
import { FunctionComponent, useMemo, type CSSProperties } from "react";

type MyComponentProps = {
  title: string;
  onSubmit?: () => void;
};

const MyComponent: FunctionComponent<MyComponentProps> = ({ title, onSubmit }) => {
  // Hooks here
  const computedValue = useMemo(() => {
    // computed logic
    return value;
  }, [dependencies]);

  return (
    <div>
      {/* JSX here */}
    </div>
  );
};

export default MyComponent;
```

### Styling

- **Use Tailwind CSS**: Prefer Tailwind utilities over CSS files
- **Avoid Inline Styles**: Use Tailwind or CSS classes for styling
- **Responsive Design**: Use Tailwind's responsive prefixes (sm:, md:, lg:)
- **Custom Styles**: Only create CSS files when necessary

**Good Example**:
```typescript
<div className="flex flex-col items-center justify-between gap-4 md:gap-8 p-4 md:p-6">
  <h1 className="text-2xl font-bold">Title</h1>
</div>
```

**Bad Example**:
```typescript
<div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
  <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Title</h1>
</div>
```

### Naming Conventions

- **Components**: PascalCase (e.g., `MyComponent.tsx`)
- **Functions/Variables**: camelCase (e.g., `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_TIMEOUT`)
- **Types/Interfaces**: PascalCase ending with Type (e.g., `ButtonPropsType`)

### Comments and Documentation

- **JSDoc Comments**: Add JSDoc comments to components and functions

**Example**:
```typescript
/**
 * Displays an event card with title, date, and time information.
 * 
 * @param componentText - The title of the event
 * @param scheduleDate - When the event is scheduled
 * @param timeSlotLabel - The time of the event
 * @param eventDate - The full date of the event
 * @param vectorImageName - Path to the event icon
 * @param propWidth - Optional custom width for the schedule date
 * 
 * @returns JSX element displaying the event card
 */
const LeadershipCard: FunctionComponent<LeadershipCardType> = ({ ... }) => {
  // ...
};
```

## Git Workflow

### Branch Naming

- **Feature**: `feature/description` (e.g., `feature/add-search-functionality`)
- **Bug Fix**: `fix/description` (e.g., `fix/header-alignment-issue`)
- **Documentation**: `docs/description` (e.g., `docs/add-component-guide`)
- **Refactor**: `refactor/description` (e.g., `refactor/optimize-component-props`)

### Branching Process

1. Update main branch:
   ```bash
   git checkout main
   git pull upstream main
   ```

2. Create feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```

3. Make changes and commit:
   ```bash
   git add .
   git commit -m "Add feature description"
   ```

4. Keep branch updated:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

## Making Changes

### Code Changes

1. **Atomic Commits**: Make small, logical commits
2. **Related Changes**: Keep related changes in one commit
3. **No Debug Code**: Remove console.log, debugger statements before committing

### File Organization

When adding new components:
```
src/
├── components/
│   ├── NewComponent.tsx    # Component file
│   ├── NewComponent.test.tsx (optional)
│   └── NewComponent.css (if needed)
```

### Updating Dependencies

If you need to add a new dependency:
```bash
npm install package-name
```

Commit with clear message:
```bash
git commit -m "Add package-name for feature-description"
```

## Testing

### Running Tests

```bash
npm test
```

### Writing Tests

Test files should be named `ComponentName.test.tsx` and placed next to the component.

**Test Template**:
```typescript
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('should render with title', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should call onSubmit when button clicked', () => {
    const mockSubmit = jest.fn();
    render(<MyComponent onSubmit={mockSubmit} title="Test" />);
    screen.getByRole('button').click();
    expect(mockSubmit).toHaveBeenCalled();
  });
});
```

### Testing Checklist

- [ ] Components render correctly
- [ ] Props are handled properly
- [ ] User interactions work (clicks, inputs)
- [ ] Edge cases are handled
- [ ] Performance is acceptable

## Commit Messages

### Message Format

```
<type>: <subject>

<body>

<footer>
```

### Type

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring without feature changes
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependencies
- `style`: Code style changes (formatting, missing semicolons)

### Subject

- Use imperative mood ("add" not "added" or "adds")
- Start with lowercase
- No period at the end
- Maximum 50 characters

### Body

- Wrap at 72 characters
- Explain what and why, not how
- Separate from subject with blank line

### Footer

Reference issue if applicable:
```
Fixes #123
Related to #456
```

### Examples

**Good Commit Messages**:
```
feat: add event search functionality

Add ability to search events by title and instructor name.
Implements search input in header with real-time filtering.

Fixes #42
```

```
fix: correct header alignment on mobile

Remove hardcoded width on header to allow responsive sizing.
Update breakpoints in tailwind config.

Related to #18
```

## Pull Request Process

### Before Submitting

1. **Rebase**: Update your branch with latest main:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run Tests**: Ensure all tests pass:
   ```bash
   npm test
   ```

3. **Build Check**: Verify production build works:
   ```bash
   npm run build
   ```

4. **Review Your Changes**: Self-review before submitting

### PR Title and Description

**PR Title Format**:
```
[Type] Brief description of change

Types: Feature, Fix, Docs, Refactor, etc.
```

**PR Description Template**:
```markdown
## Description
Brief description of changes

## Related Issues
Fixes #123

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation

## Changes Made
- List specific changes
- Each change on new line

## Testing
Describe how you tested the changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] My code follows style guidelines
- [ ] I've updated documentation
- [ ] I've added tests
- [ ] All tests pass
- [ ] Build succeeds
```

### Review Process

1. Wait for review from maintainers
2. Address requested changes:
   ```bash
   git add .
   git commit -m "Address review comments"
   git push
   ```
3. Re-request review after changes
4. Once approved, wait for maintainer to merge

### After Merge

1. Delete your feature branch:
   ```bash
   git branch -d feature/your-feature
   git push origin --delete feature/your-feature
   ```

2. Pull latest main:
   ```bash
   git checkout main
   git pull upstream main
   ```

## Reporting Issues

### Issue Report Format

**Title**: Clear, concise description

**Description**:
```markdown
## Description
Brief description of the issue

## Steps to Reproduce
1. First step
2. Second step
3. Final step

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: (Windows/Mac/Linux)
- Node version: (from `node --version`)
- Browser: (Chrome/Firefox/Safari/Edge)

## Screenshots
If applicable, add screenshots

## Additional Context
Any other context about the issue
```

### Issue Types

- **Bug Report**: Something isn't working
- **Feature Request**: Suggest a new feature
- **Enhancement**: Improve existing functionality
- **Documentation**: Improvement to docs

## Code Review Guidelines

### As an Author

- Keep PRs focused and manageable (< 400 lines if possible)
- Include context and reasoning
- Respond to feedback promptly
- Ask questions if feedback is unclear

### As a Reviewer

- Be constructive and respectful
- Suggest improvements, don't demand
- Approve when satisfied with changes
- Appreciate efforts of contributors

## Questions?

- Open an issue with the question tag
- Check existing issues and discussions
- Contact maintainers

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Report inappropriate behavior
- Follow project guidelines

## Recognition

Contributors will be recognized in:
- Git commit history
- GitHub contributors page
- Project documentation (with permission)

Thank you for contributing! 🎉
