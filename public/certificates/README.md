# Certificate Assets

This directory contains certificate images and PDFs for the Experience section.

## Adding Certificates

1. Place your certificate files in this directory
2. Update the experience entry in `src/data/experience.ts`

### Example:

```typescript
{
  id: 'exp-1',
  year: '2025',
  position: 'Software Developer Intern',
  organization: 'TechCorp',
  dateRange: 'June–August 2025',
  description: 'Developed and maintained web applications using React and Node.js',
  certificate: {
    src: '/certificates/your-certificate-name.png',
    alt: 'Description of the certificate',
    type: 'image', // or 'pdf'
  },
}
```

## Supported Formats

- **Images:** `.png`, `.jpg`, `.jpeg`, `.webp`
- **PDFs:** `.pdf`

## Naming Convention

Use descriptive kebab-case names:
- `software-developer-intern.png`
- `web-development-certificate.pdf`
- `teaching-assistant-completion.jpg`

## File Size Recommendations

- Images: Optimize to < 500KB for faster loading
- PDFs: Keep under 2MB when possible

The modal will automatically handle aspect ratios and display certificates responsively.
