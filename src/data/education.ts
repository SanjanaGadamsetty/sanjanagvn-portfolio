export interface EducationEntry {
  id: string;
  institution: string;
  qualification: string;
  period: string;
  details?: string;
  score?: string;
}

// Add earlier schools only after their names, dates and qualifications are confirmed.
export const education: EducationEntry[] = [
  {
    id: 'sjce',
    institution: "St. Joseph's College of Engineering",
    qualification: 'Undergraduate Engineering',
    period: '2025 – 2029',
    score: 'CGPA: 9.72',
    details: 'B.Tech Artificial Intelligence and Data Science',
  },
  {
    id: 'iitm',
    institution: "Indian Institute of Technology, Madras",
    qualification: 'Undergraduate Engineering',
    period: '2025 – 2027',
    score: 'CGPA: 8.5',
    details: 'B.Sc Data Science and Applications(Dual Degree)',
  },
  {
    id: 'zips',
    institution: "Zion International Public School",
    qualification: 'Higher Secondary Education',
    period: '2024 – 2025',
    score: 'Percentage: 86.2%',
    details: 'Grade 12, Computer Science Stream',
  },
  {
    id: 'lmd',
    institution: "L.M. Dadha Sr. Sec. School",
    qualification: 'Secondary Education',
    period: '2022 – 2023',
    score: 'Percentage: 91.2%',
    details: 'Grade 10',
  },
];
