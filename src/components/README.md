# Components

This folder contains reusable React components that can be used throughout your application.

## Purpose

Components are the building blocks of your React application. They are modular, reusable pieces of UI that can be composed together to create complex interfaces.

## What goes here?

- **Reusable UI components**: Buttons, Inputs, Cards, Modals, etc.
- **Layout components**: Header, Footer, Sidebar, Navigation, etc.
- **Feature-specific components**: Components that are shared across multiple pages or features

## Example Structure

```
components/
  ├── Button/
  │   ├── Button.jsx
  │   └── Button.css
  ├── Card/
  │   ├── Card.jsx
  │   └── Card.css
  └── Header/
      ├── Header.jsx
      └── Header.css
```

## Best Practices

- Keep components focused on a single responsibility
- Make components reusable and configurable through props
- Use descriptive component names (e.g., `PrimaryButton` instead of `Button1`)
- Co-locate component-specific styles with the component when possible
