# Services

This folder contains service modules that handle external API calls, data fetching, and business logic that interacts with external systems.

## Purpose

Services encapsulate all interactions with external APIs, backend services, and third-party integrations. They provide a clean interface for components and hooks to access data and perform operations.

## What goes here?

- **API clients**: Functions that make HTTP requests to your backend
- **Third-party integrations**: Services for external APIs (payment, authentication, etc.)
- **Data fetching logic**: Functions that retrieve and manipulate data
- **Business logic services**: Complex operations that don't belong in components

## Example Structure

```
services/
  ├── api/
  │   ├── client.js
  │   └── endpoints.js
  ├── authService.js
  ├── userService.js
  └── productService.js
```

## Example Usage

```javascript
// services/userService.js
export const userService = {
  async getUser(id) {
    const response = await fetch(`/api/users/${id}`)
    return response.json()
  },
  
  async updateUser(id, data) {
    // update logic
  }
}

// Usage in component or hook
import { userService } from '../services/userService'
```

## Best Practices

- Keep services focused on a single domain (e.g., userService, productService)
- Handle errors consistently
- Use async/await for asynchronous operations
- Consider creating a base API client for shared configuration
- Don't mix UI logic with service logic

