# Constants

This folder contains constant values, configuration, and static data that are used throughout your application.

## Purpose

Constants provide a centralized location for values that don't change during runtime. This makes your code more maintainable and easier to update.

## What goes here?

- **Configuration values**: API URLs, environment-specific settings
- **Static strings**: Labels, messages, error texts
- **Enumerations**: Status codes, permission types, etc.
- **Magic numbers**: Replace magic numbers with named constants
- **Route paths**: Centralized route definitions
- **Default values**: Default settings, limits, etc.

## Example Structure

```
constants/
  ├── api.js
  ├── routes.js
  ├── status.js
  └── messages.js
```

## Example Usage

```javascript
// constants/api.js
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000";
export const API_ENDPOINTS = {
  USERS: "/api/users",
  PRODUCTS: "/api/products",
};

// constants/routes.js
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
};

// Usage
import { ROUTES } from "../constants/routes";
```

## Best Practices

- Group related constants together
- Use descriptive, UPPER_CASE names for constants
- Export objects for related constants
- Document complex constants with comments
- Avoid hardcoding values in components - use constants instead
- Consider using environment variables for configuration
