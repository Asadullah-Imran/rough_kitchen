# Pages

This folder contains page-level components that represent different routes in your application.

## Purpose

Pages are top-level components that typically correspond to routes in your application. They compose multiple components together to create complete page views.

## What goes here?

- **Route components**: Components that represent specific URLs/routes
- **Page layouts**: Complete page views that combine multiple components
- **Feature pages**: Main entry points for different features of your application

## Example Structure

```
pages/
  ├── Home/
  │   └── Home.jsx
  ├── About/
  │   └── About.jsx
  ├── Contact/
  │   └── Contact.jsx
  └── Dashboard/
      └── Dashboard.jsx
```

## Best Practices

- Each page should be a self-contained component
- Pages should primarily compose components rather than contain complex logic
- Keep business logic in custom hooks or services, not in page components
- Use consistent naming that matches your routes (e.g., `/about` → `About.jsx`)

