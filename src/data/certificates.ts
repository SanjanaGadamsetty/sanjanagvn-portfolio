import adobeImage from './certs/all-certs/adobe.png';
import aiAscendImage from './certs/all-certs/ai-ascend.png';
import aiMlInternImage from './certs/all-certs/ai-ml-intern.png';
import cAssemblyImage from './certs/all-certs/c-assembly.png';
import dataStoryImage from './certs/all-certs/data-story.png';
import dsaBasicsImage from './certs/all-certs/dsa-basics.png';
import eliteQuizImage from './certs/all-certs/elite-quiz.png';
import frontendOdysseyImage from './certs/all-certs/frontend-odyssey.png';
import genAiImage from './certs/all-certs/gen-ai.png';
import h360Image from './certs/all-certs/h-360.png';
import icpcImage from './certs/all-certs/icpc.png';
import introLlmsImage from './certs/all-certs/intro-llms.png';
import kiodeWarsImage from './certs/all-certs/kiode-wars.png';
import mathDsImage from './certs/all-certs/math-ds.png';
import oopImage from './certs/all-certs/oop.png';
import opscapeImage from './certs/all-certs/opscape.png';
import p1PyImage from './certs/all-certs/p1-py.png';
import p2PyImage from './certs/all-certs/p2-py.png';
import pyBasicsImage from './certs/all-certs/py-basics.png';
import pythonLibDsImage from './certs/all-certs/python-lib-ds.png';
import respAiImage from './certs/all-certs/resp-ai.png';
import sjcePpImage from './certs/all-certs/sjce-pp.png';
import technovaImage from './certs/all-certs/technova.png';
import triqImage from './certs/all-certs/triq.png';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  image: string;
  skills: string[];
  description?: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  displayAspectRatio?: number; // width/height for mosaic display
  associatedSkillCategory?: string;
}

export const certificates: Certificate[] = [
  { id: 'cert-1', 
    title: 'AI Ascend 2026', 
    issuer: 'AI Ascend', 
    issueDate: 'May 2026', 
    image: aiAscendImage,
    skills: ['Artificial Intelligence', 'Problem Solving'], 
    description: "Certificate of participation in AI Ascend 2026.",
    imageFit: "cover" },

  { id: 'cert-2', 
    title: 'Basics of Data Structures and Algorithms', 
    issuer: 'Simplilearn', 
    issueDate: 'Aug 2025',
    image: dsaBasicsImage,
    skills: ['Data Structures', 'Algorithms'], 
    description: "Certificate of completion for Basics of Data Structures and Algorithms.",
    imageFit: "contain" },
  
  { id: 'cert-3', 
    title: 'AI/ML Intern Test', 
    issuer: 'QuizCred', 
    issueDate: 'Apr 2026', 
    image: aiMlInternImage,
    skills: ['Artificial Intelligence', 'Machine Learning'], 
    description: "AI/ML Intern Test certificate from QuizCred",
    imageFit: "contain" },
  
  { id: 'cert-4', 
    title: 'Python Libraries for Data Science', 
    issuer: 'Simplilearn SkillUp', 
    issueDate: 'Apr 2026', 
    image: pythonLibDsImage,
    skills: ['Python', 'Data Science', 'Python Libraries'], 
    description: "Certificate of completion for Python Libraries for Data Science.",
    imageFit: "contain" },
  
  { id: 'cert-5', 
    title: 'TRiQ Think Twice - Certificate of Achievement', 
    issuer: 'OutThinkX', 
    issueDate: 'Feb 2026', 
    image: triqImage,
    skills: ['Critical Thinking', 'Problem Solving', 'Quiz'], 
    description: "Certificate of achievement for TRiQ Think Twice.",
    imageFit: "contain" },
  
  { id: 'cert-6', 
    title: 'Mathematics for Data Science', 
    issuer: 'Simplilearn SkillUp', 
    issueDate: 'Feb 2026', 
    image: mathDsImage,
    skills: ['Mathematics', 'Data Science'], 
    description: "Certificate of completion for Mathematics for Data Science.",
    imageFit: "contain" },
  
  { id: 'cert-7', 
    title: 'TechNova National Quiz Challenge 2026', 
    issuer: "St. Joseph's College of Engineering", 
    issueDate: 'Feb 2026', 
    image: technovaImage,
    skills: ['General Knowledge', 'Quiz', 'Problem Solving'], 
    description: "Certificate of participation in the TechNova National Quiz Challenge 2026.",
    imageFit: "contain" },
  
  { id: 'cert-8', 
    title: 'Data AI-Driven Carbon Footprint Tracking', 
    issuer: "St. Joseph's College of Engineering", 
    issueDate: 'Dec 2025', 
    image: sjcePpImage,
    skills: ['Research', 'Data Analysis', 'Sustainability'], 
    description: "Certificate of appreciation for presenting research on data and AI-driven carbon footprint tracking at the International Conference on Sustainable Development Goals and Environmental Sustainability.",
    imageFit: "contain" },
  
  { id: 'cert-9', 
    title: 'C Programming and Assembly Language', 
    issuer: 'NPTEL Online Certification', 
    issueDate: 'Dec 2025', 
    image: cAssemblyImage,
    skills: ['C Programming', 'Assembly Language'], 
    description: "Certificate of completion for the C Programming and Assembly Language course.",
    imageFit: "contain" },
  
  { id: 'cert-10', 
    title: 'Adobe University Hackathon', 
    issuer: 'Adobe and Unstop', 
    issueDate: 'Oct 2025', 
    image: adobeImage,
    skills: ['Hackathon', 'Innovation', 'Problem Solving'], 
    description: "Certificate of participation in the Adobe University Hackathon.",
    imageFit: "contain" },

  { id: 'cert-11',
    title: 'The Frontend Odyssey 2026',
    issuer: 'Frontend Arena and Unstop',
    issueDate: '2026',
    image: frontendOdysseyImage,
    skills: ['Frontend Development', 'Web Development', 'Problem Solving'],
    description: "Certificate of participation in The Frontend Odyssey 2026.",
    imageFit: "contain" },

  { id: 'cert-12',
    title: 'National Level Hackathon 360° 2.0 - Round 1',
    issuer: "EC Learnix and St. Joseph's College of Engineering",
    issueDate: '2026',
    image: h360Image,
    skills: ['Hackathon', 'Innovation', 'Problem Solving'],
    description: "Certificate of participation in Hackathon 360°.",
    imageFit: "contain" },

  { id: 'cert-13',
    title: 'Kiode Wars',
    issuer: 'Kurukshetra, Anna University',
    issueDate: '2026',
    image: kiodeWarsImage,
    skills: ['Quiz', 'Problem Solving', 'Technology'],
    description: "Certificate of participation in Kiode Wars at Kurukshetra.",
    imageFit: "contain" },

  { id: 'cert-14',
    title: 'OpScape 2.0',
    issuer: 'Indian Institute of Management Tiruchirappalli',
    issueDate: '2026',
    image: opscapeImage,
    skills: ['Problem Solving', 'Innovation', 'Competition'],
    description: "Certificate of participation in OpScape 2.0.",
    imageFit: "contain" },

  { id: 'cert-15',
    title: 'Elite Quiz 4.0',
    issuer: 'Elite Coders',
    issueDate: '2026',
    image: eliteQuizImage,
    skills: ['Quiz', 'General Knowledge', 'Problem Solving'],
    description: "Certificate of participation in Elite Quiz 4.0.",
    imageFit: "contain" },

  { id: 'cert-16',
    title: 'Storytelling With Data',
    issuer: 'Coursera Project Network',
    issueDate: '2026',
    image: dataStoryImage,
    skills: ['Data Storytelling', 'Data Visualization', 'Communication'],
    description: "Certificate of completion for the Storytelling With Data project.",
    imageFit: "contain" },

  { id: 'cert-17',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud and Coursera',
    issueDate: '2026',
    image: genAiImage,
    skills: ['Generative AI', 'Google Cloud', 'Artificial Intelligence'],
    description: "Certificate of completion for Introduction to Generative AI.",
    imageFit: "contain" },

  { id: 'cert-18',
    title: "ICPC Algo Queen 2026 - The Girls' Programming Cup",
    issuer: 'ICPC Foundation and Amrita Vishwa Vidyapeetham',
    issueDate: '2026',
    image: icpcImage,
    skills: ['Competitive Programming', 'Algorithms', 'Problem Solving'],
    description: "Certificate of appreciation for participating in ICPC Algo Queen 2026.",
    imageFit: "contain" },

  { id: 'cert-19',
    title: 'Introduction to Large Language Models',
    issuer: 'Google Cloud and Coursera',
    issueDate: '2026',
    image: introLlmsImage,
    skills: ['Large Language Models', 'Generative AI', 'Artificial Intelligence'],
    description: "Certificate of completion for Introduction to Large Language Models.",
    imageFit: "contain" },

  { id: 'cert-20',
    title: 'Object Oriented Programming using Python',
    issuer: 'Infosys Springboard',
    issueDate: '2026',
    image: oopImage,
    skills: ['Python', 'Object-Oriented Programming', 'Programming Fundamentals'],
    description: "Course completion certificate for Object Oriented Programming using Python.",
    imageFit: "contain" },

  { id: 'cert-21',
    title: 'Programming Fundamentals using Python - Part 1',
    issuer: 'Infosys Springboard',
    issueDate: '2026',
    image: p1PyImage,
    skills: ['Python', 'Programming Fundamentals'],
    description: "Course completion certificate for Programming Fundamentals using Python - Part 1.",
    imageFit: "contain" },

  { id: 'cert-22',
    title: 'Programming Fundamentals using Python - Part 2',
    issuer: 'Infosys Springboard',
    issueDate: '2026',
    image: p2PyImage,
    skills: ['Python', 'Programming Fundamentals'],
    description: "Course completion certificate for Programming Fundamentals using Python - Part 2.",
    imageFit: "contain" },

  { id: 'cert-23',
    title: 'Basics of Python',
    issuer: 'Infosys Springboard',
    issueDate: '2026',
    image: pyBasicsImage,
    skills: ['Python', 'Programming Fundamentals'],
    description: "Course completion certificate for Basics of Python.",
    imageFit: "contain" },

  { id: 'cert-24',
    title: 'Introduction to Responsible AI',
    issuer: 'Google Cloud and Coursera',
    issueDate: '2026',
    image: respAiImage,
    skills: ['Responsible AI', 'Artificial Intelligence', 'AI Ethics'],
    description: "Certificate of completion for Introduction to Responsible AI.",
    imageFit: "contain" },
];
