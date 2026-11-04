export interface ContactLink {
  id: string;
  platform: string;
  icon: string; // Lucide icon name
  url: string;
  type: 'link' | 'email';
}

export const contactLinks: ContactLink[] = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    icon: 'Linkedin',
    url: 'https://www.linkedin.com/in/sanjana-gadamsetty/', // Replace with your LinkedIn
    type: 'link',
  },
  {
    id: 'github',
    platform: 'GitHub',
    icon: 'Github',
    url: 'https://github.com/SanjanaGadamsetty', // Replace with your GitHub
    type: 'link',
  },
  {
    id: 'medium',
    platform: 'Medium',
    icon: 'BookOpen',
    url: 'https://medium.com/@gvnsanjana.ds', // Replace with your Medium
    type: 'link',
  },
  {
    id: 'twitter',
    platform: 'Twitter',
    icon: 'Twitter',
    url: 'https://x.com/venkata_sa98809', // Replace with your Twitter
    type: 'link',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    icon: 'Instagram',
    url: 'https://www.instagram.com/stack.of.dreams/', // Replace with your Instagram
    type: 'link',
  },
  {
    id: 'email',
    platform: 'Email',
    icon: 'Mail',
    url: 'mailto:gvnsanjana.ds@gmail.com', // Replace with your email
    type: 'email',
  },
];
