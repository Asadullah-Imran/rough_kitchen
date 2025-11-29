# Contexts

This folder contains React Context providers and related context files for managing global application state.

## Purpose

React Context provides a way to share state and functionality across multiple components without prop drilling. Contexts are useful for global state that needs to be accessible from many components.

## What goes here?

- **Context providers**: React Context definitions and Provider components
- **Global state management**: Authentication state, theme, user preferences, etc.
- **Shared state logic**: State that needs to be accessed by multiple unrelated components

## Example Structure

```
contexts/
  ├── AuthContext.jsx
  ├── ThemeContext.jsx
  └── CartContext.jsx
```

## Example Usage

```javascript
// contexts/AuthContext.jsx
import { createContext, useContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // provider logic
}

export function useAuth() {
  return useContext(AuthContext);
}

// Usage in components
import { useAuth } from "../contexts/AuthContext";
```

## Best Practices

- Use Context for truly global state that many components need
- Avoid using Context for state that could be passed via props
- Create custom hooks (useAuth, useTheme) for consuming contexts
- Keep context providers focused on a single concern
- Consider using Context + useReducer for complex state management
