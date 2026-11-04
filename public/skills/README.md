# Skill Icons

## Current Setup: CDN-Hosted Icons ✅

**Good news!** All skill icons are currently working via CDN (DevIcons via jsDelivr).

No downloads needed - the icons work automatically.

## Using Local Icons (Optional)

If you prefer to host icons locally instead of using CDN:

### Step 1: Add Icon Image to This Directory

Save your icon in `/public/skills/` (e.g., `python.png`, `react.svg`)

**Recommended format:**
- File type: PNG with transparent background or SVG
- Size: 256x256px or 512x512px
- Naming: lowercase kebab-case (e.g., `python.png`, `visual-studio-code.svg`)

### Step 2: Update Icon Path

Open `src/data/skills.ts` and change the CDN URL to local path:

```typescript
// Before (CDN):
{ name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }

// After (Local):
{ name: 'Python', icon: '/skills/python.png' }
```

## Adding New Skills

### Using CDN Icons (Recommended)

**Find icons at:** https://devicon.dev/

1. Search for your technology
2. Copy the SVG CDN link
3. Update `src/data/skills.ts`:

```typescript
{
  id: 'programming',
  skills: [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
  ],
}
```

### Using Local Icons

1. Download icon and save in `/public/skills/`
2. Update path in `skills.ts`:

```typescript
{ name: 'Ruby', icon: '/skills/ruby.png' }
```

## Icon Sources

### DevIcons (Currently Used)
- URL: https://devicon.dev/
- 150+ programming language icons
- Free SVG icons via CDN
- Consistent style

### Alternative Sources
- [Simple Icons](https://simpleicons.org/) - Brand SVG icons
- [Icons8](https://icons8.com/icons) - Free icon library
- [Flaticon](https://www.flaticon.com/) - Icon packs

## Benefits of CDN Icons

✅ No file management  
✅ Always up-to-date  
✅ Fast loading (cached globally)  
✅ No storage needed  

## Benefits of Local Icons

✅ Full control  
✅ Works offline  
✅ Custom designs  
✅ No external dependencies  

## Current Skills Using CDN

All 19 skills are currently using DevIcons CDN:
- Python, C++, Java, JavaScript
- Data Structures, Algorithms, DBMS, Operating Systems
- MySQL, PostgreSQL, MongoDB
- HTML, CSS, React, TypeScript
- Git, GitHub, VS Code, Figma

You can replace any of these with local files anytime.
