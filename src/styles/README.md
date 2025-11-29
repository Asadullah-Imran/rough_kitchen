# Styles

This folder contains global styles, CSS modules, and shared styling utilities for your application.

## Purpose

This folder centralizes styling files that are shared across components or used for global styling. It helps maintain consistency and reusability of styles throughout your application.

## What goes here?

- **Global styles**: Base styles, resets, typography
- **Shared CSS modules**: Reusable style modules
- **Theme files**: CSS variables, color schemes, spacing systems
- **Animation files**: Shared keyframe animations
- **Component-specific styles**: Styles that are shared by multiple components

## Example Structure

```
styles/
  ├── globals.css
  ├── variables.css
  ├── animations.css
  └── components.css
```

## Best Practices

- Use CSS variables for theme values (colors, spacing, etc.)
- Keep global styles minimal
- Prefer component-scoped styles when possible
- Organize styles by concern (typography, layout, colors, etc.)
- If using Tailwind, you may not need many files here
- Consider using CSS modules or styled-components for component styles

## Note

If you're using Tailwind CSS (which is configured in your project), most utility classes can be used directly in components. Use this folder for custom CSS that extends or supplements your Tailwind setup.
