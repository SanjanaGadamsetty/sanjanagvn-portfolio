export interface CodingProfile {
  platform: string;
  username: string;
  profileUrl: string;
  stats: {
    label: string;
    value: string | number;
  }[];
  rank?: string;
  badge?: string;
  description?: string;
}

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'sanjanagadamsetty',
    profileUrl: 'https://leetcode.com/sanjanagadamsetty',
    rank: 'Knight',
    badge: '🛡️',
    stats: [
      { label: 'Problems Solved', value: 450 },
      { label: 'Contest Rating', value: 1850 },
      { label: 'Global Ranking', value: 'Top 5%' }
    ],
    description: 'Active problem solver with focus on algorithms and data structures'
  },
  {
    platform: 'CodeChef',
    username: 'sanjana_g',
    profileUrl: 'https://codechef.com/users/sanjana_g',
    rank: '4 Star',
    badge: '⭐',
    stats: [
      { label: 'Max Rating', value: 1890 },
      { label: 'Problems Solved', value: 320 },
      { label: 'Contests', value: 45 }
    ],
    description: 'Competitive programmer with consistent performance'
  },
  {
    platform: 'HackerRank',
    username: 'sanjanagadamsetty',
    profileUrl: 'https://hackerrank.com/sanjanagadamsetty',
    rank: 'Gold',
    badge: '🥇',
    stats: [
      { label: 'Stars', value: '5 ⭐' },
      { label: 'Badges', value: 25 },
      { label: 'Points', value: 8500 }
    ],
    description: 'Gold badge holder in Problem Solving and Python'
  },
  {
    platform: 'Codeforces',
    username: 'sanjana_dev',
    profileUrl: 'https://codeforces.com/profile/sanjana_dev',
    rank: 'Expert',
    badge: '💙',
    stats: [
      { label: 'Max Rating', value: 1650 },
      { label: 'Contests', value: 38 },
      { label: 'Problems Solved', value: 280 }
    ],
    description: 'Expert level competitive programmer'
  },
  {
    platform: 'GitHub',
    username: 'sanjanagadamsetty',
    profileUrl: 'https://github.com/sanjanagadamsetty',
    badge: '🐙',
    stats: [
      { label: 'Repositories', value: 48 },
      { label: 'Stars', value: 850 },
      { label: 'Contributions', value: '1.2K+' },
      { label: 'Followers', value: 320 }
    ],
    description: 'Active open source contributor and maintainer'
  }
];

export interface CodingStats {
  totalProblems: number;
  contestsParticipated: number;
  globalRanking: string;
  longestStreak: number;
  currentStreak: number;
  languages: {
    name: string;
    percentage: number;
  }[];
}

export const overallCodingStats: CodingStats = {
  totalProblems: 1050,
  contestsParticipated: 120,
  globalRanking: 'Top 5%',
  longestStreak: 45,
  currentStreak: 12,
  languages: [
    { name: 'JavaScript', percentage: 35 },
    { name: 'TypeScript', percentage: 30 },
    { name: 'Python', percentage: 20 },
    { name: 'C++', percentage: 10 },
    { name: 'Others', percentage: 5 }
  ]
};
