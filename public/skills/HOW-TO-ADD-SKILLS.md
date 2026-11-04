# How to Add or Edit Skills

## Quick Guide

### Adding a New Skill

1. **Get your skill icon** (PNG or SVG, 256x256px recommended)
2. **Save it** in `/public/skills/` with a clear name (e.g., `python.png`)
3. **Update** `src/data/skills.ts`

### Example: Adding "Ruby"

**Step 1:** Save `ruby.png` in `/public/skills/`

**Step 2:** Open `src/data/skills.ts` and find the programming category:

```typescript
{
  id: 'programming',
  title: 'Programming',
  icon: 'Code',
  color: 'green',
  description: 'Core programming languages I use to build robust applications',
  skills: [
    { name: 'Python', icon: '/skills/python.png' },
    { name: 'C++', icon: '/skills/cpp.png' },
    { name: 'Java', icon: '/skills/java.png' },
    { name: 'JavaScript', icon: '/skills/javascript.png' },
    { name: 'Ruby', icon: '/skills/ruby.png' }, // ← Add this line
  ],
}
```

**Step 3:** Save and rebuild your project

```bash
npm run build
npm run dev
```

Done! Your skill now appears in the Skills section.

## Adding a New Category (Book)

To add a completely new category like "Cloud Services":

```typescript
{
  id: 'cloud',
  title: 'Cloud Services',
  icon: 'Cloud', // Lucide icon name
  color: 'green', // or 'ivory'
  description: 'Cloud platforms and services I work with',
  skills: [
    { name: 'AWS', icon: '/skills/aws.png' },
    { name: 'Azure', icon: '/skills/azure.png' },
  ],
}
```

## Changing Book Colors

Each book can be either `green` or `ivory`:

```typescript
color: 'green',  // Dark green book spine
color: 'ivory',  // Light ivory book spine
```

Alternate colors for visual variety.

## File Naming Convention

✅ **Good:**
- `python.png`
- `visual-studio-code.png`
- `react-native.png`

❌ **Avoid:**
- `Python.png` (uppercase)
- `visual studio code.png` (spaces)
- `react_native.png` (underscores are okay but kebab-case is preferred)

## Icon Path Reference

All paths start with `/skills/` because the `public` folder is the web root:

| File Location | Path in Code |
|--------------|--------------|
| `public/skills/python.png` | `/skills/python.png` |
| `public/skills/react.png` | `/skills/react.png` |

## Where the Code Lives

- **Skill data:** `src/data/skills.ts`
- **Skills section:** `src/sections/Skills/Skills.tsx`
- **Icon storage:** `public/skills/`

## Display Format

Each skill shows:
- Icon (64x64px display size from your image)
- Skill name below the icon
- Clean card with hover effect

No percentages. No progress bars. Just clean, simple icons and names.
