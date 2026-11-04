export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  email: string;
  location: string;
  phone?: string;
  availability: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: 'full-time' | 'internship' | 'contract' | 'freelance';
  description: string[];
  technologies: string[];
  achievements?: string[];
}

export const personalInfo: PersonalInfo = {
 name: 'Sanjana Gadamsetty', title: 'Engineering Student & Tech Enthusiast',
 tagline: 'Exploring programming, data science, cloud and AI',
 bio: ['I am an engineering student at St. Joseph’s College of Engineering (2025–2029), with a 9.72 CGPA listed on my LinkedIn profile.', 'My learning interests include programming, data science, AI and cloud technologies. I share technical learning and insights with the developer community.', 'I have experience spanning development, AI and data science, cloud engineering, technical content and campus community leadership.'],
 email: '', location: 'Chennai, Tamil Nadu, India', availability: 'Open to learning and collaboration'
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/sanjanagadamsetty',
    icon: 'github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sanjana-gadamsetty/',
    icon: 'linkedin'
  },
  {
    platform: 'Twitter',
    url: 'https://www.linkedin.com/in/sanjana-gadamsetty/',
    icon: 'twitter'
  },
  {
    platform: 'Email',
    url: 'https://www.linkedin.com/in/sanjana-gadamsetty/',
    icon: 'mail'
  }
];

export const experiences: Experience[] = [];
