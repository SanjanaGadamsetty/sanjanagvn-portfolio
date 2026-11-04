export interface Certificate {
  src: string;
  alt: string;
  type: 'image' | 'pdf';
}

export interface ExperienceEntry {
  id: string;
  year: string;
  position: string;
  organization: string;
  dateRange: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  certificate?: Certificate;
  verificationLink?: string;
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'exp-1',
    year: '2026',
    position: 'Web Developer',
    organization: 'InAmigos Foundation',
    dateRange: 'November 2026 – Present',
    description: 'Web Developer intern at InAmigos Foundation (IAF), working remotely from India.',
    technologies: ['Web Development'],
  },
  {
    id: 'exp-2',
    year: '2026',
    position: 'Campus Lead',
    organization: 'Open Source Connect',
    dateRange: 'September 2026 – Present',
    description: 'Campus Lead for Open Source Connect (OSCI’26), working remotely from India.',
  },
  {
    id: 'exp-3',
    year: '2026',
    position: 'ICPC Amritapuri Ambassador',
    organization: 'ICPC – International Collegiate Programming Contest',
    dateRange: 'September 2026 – Present',
    description: 'Part-time ICPC Amritapuri Ambassador, working remotely.',
  },
  {
    id: 'exp-4',
    year: '2026',
    position: 'Cloud Engineer Intern',
    organization: 'Finsetisis – UNLOX',
    dateRange: 'August 2026 – September 2026',
    description: 'Cloud Engineer intern at Finsetisis – UNLOX, working remotely from Bengaluru.',
    certificate: {
      src: '/certificates/cloud-engineer-intern.png',
      alt: 'Cloud Engineer Internship Certificate',
      type: 'image',
    },
  },
  {
    id: 'exp-5',
    year: '2026',
    position: 'AI and Data Science Intern',
    organization: 'XYlofy AI',
    dateRange: 'June 2026 – July 2026',
    description: 'AI and Data Science intern at XYlofy AI, working remotely from Bengaluru, Karnataka.',
    technologies: ['Data Analytics'],
    certificate: {
      src: '/certificates/ai-data-science-intern.png',
      alt: 'AI and Data Science Internship Certificate',
      type: 'image',
    },
  },
  {
    id: 'exp-6',
    year: '2026',
    position: 'Developer Intern',
    organization: 'TANGEDCO',
    dateRange: 'June 2026',
    description: 'Developer intern at TANGEDCO, working on-site in Chennai, Tamil Nadu.',
    technologies: ['Technical Research'],
    certificate: {
      src: '/certificates/developer-internship.png',
      alt: 'Developer Internship Certificate',
      type: 'image',
    },
  },
  {
    id: 'exp-7',
    year: '2026',
    position: 'Technical Content Writer',
    organization: 'Aptitude Guru Hem',
    dateRange: 'January 2026 – March 2026',
    description: 'Technical Content Writer intern at Aptitude Guru Hem, working remotely from Chennai, Tamil Nadu.',
    certificate: {
      src: '/certificates/technical-content-writing-internship.png',
      alt: 'Technical Content Writing Internship Certificate',
      type: 'image',
    },
  },
];
