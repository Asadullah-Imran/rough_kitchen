# Hooks

This folder contains custom React hooks that encapsulate reusable logic and state management.

## Purpose

Custom hooks allow you to extract component logic into reusable functions. They enable you to share stateful logic between components without duplicating code.

## What goes here?

- **Custom hooks**: Functions that start with `use` and may call other hooks
- **State management hooks**: Hooks that manage complex state logic
- **API/data fetching hooks**: Hooks that handle data fetching and caching
- **Form handling hooks**: Hooks for managing form state and validation

## Example Structure

```
hooks/
  ├── useAuth.js
  ├── useApi.js
  ├── useLocalStorage.js
  └── useDebounce.js
```

## Example Usage

```javascript
// hooks/useLocalStorage.js
export function useLocalStorage(key, initialValue) {
  // hook implementation
}

// Usage in component
import { useLocalStorage } from "../hooks/useLocalStorage";
```

## Best Practices

- Always prefix custom hooks with `use`
- Hooks should follow React's rules of hooks
- Keep hooks focused on a single concern
- Extract complex logic from components into hooks for reusability
