export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  githubUrl?: string;
  liveWebsite?: string;
}

export const projects: Project[] = [
  {
    id: 'coding-profiles-of-sanjana',
    title: 'Coding Profiles Of Sanjana',
    description:
      'A curated collection of Sanjana’s coding profiles, programming practice, and developer activity across online platforms.',
    thumbnail: 'src/data/images/coding.png',
    technologies: ['React', 'TypeScript', 'Coding Profiles'],
    githubUrl: 'https://github.com/SanjanaGadamsetty/Coding-Profiles-Of-Sanjana',
    liveWebsite: 'https://sanjanagadamsetty.github.io/Coding-Profiles-Of-Sanjana/',
  },
  {
    id: 'socratic-tutoring-system',
    title: 'Socratic Tutoring System',
    description:
      'An interactive tutoring platform designed to guide learners through questions and structured problem-solving.',
    thumbnail: 'src/data/images/socratic.png',
    technologies: ['Education', 'Tutoring', 'AI'],
    githubUrl: 'https://github.com/SanjanaGadamsetty/socratic-tutoring-system',
  },
  {
    id: 'secure-document-vault',
    title: 'Secure Document Vault',
    description:
      'A secure application for storing, organizing, and managing important documents.',
    thumbnail: 'src/data/images/vault.png',
    technologies: ['Security', 'Documents', 'Web Application'],
    githubUrl: 'https://github.com/SanjanaGadamsetty/Secure-Document-Vault',
  },
  {
    id: 'sanjana-hp-portfolio',
    title: 'Sanjana HP Portfolio',
    description:
      'A personal portfolio website showcasing projects, skills, experience, and professional work.',
    thumbnail: 'src/data/images/hp.png',
    technologies: ['React', 'Portfolio', 'Frontend'],
    githubUrl: 'https://github.com/SanjanaGadamsetty/SanjanaGadamsetty-HP-Portfolio',
    liveWebsite: 'https://sanjanagadamsetty.github.io/SanjanaGadamsetty-HP-Portfolio/',
  },
  {
    id: 'booktracker',
    title: 'BookTracker',
    description:
      'A book tracking application for organizing reading lists and monitoring reading progress.',
    thumbnail: 'src/data/images/book-tracker.png',
    technologies: ['Books', 'Tracking', 'Web Application'],
    githubUrl: 'https://github.com/SanjanaGadamsetty/booktracker',
  },
];
