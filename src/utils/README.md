# Utils

This folder contains utility functions and helper methods that are used throughout your application.

## Purpose

Utility functions are pure, reusable functions that perform common operations. They don't depend on React and can be used anywhere in your application.

## What goes here?

- **Helper functions**: Date formatting, string manipulation, array operations, etc.
- **Pure functions**: Functions with no side effects
- **Validation functions**: Input validation, email validation, etc.
- **Formatting functions**: Currency, dates, numbers, etc.
- **Math/calculation functions**: Calculations and transformations

## Example Structure

```
utils/
  ├── formatDate.js
  ├── validateEmail.js
  ├── debounce.js
  └── constants.js
```

## Example Usage

```javascript
// utils/formatDate.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString()
}

// Usage
import { formatDate } from '../utils/formatDate'
```

## Best Practices

- Keep functions pure (no side effects)
- Write functions that are easy to test
- Use descriptive function names
- Add JSDoc comments for complex functions
- Group related utilities in the same file

