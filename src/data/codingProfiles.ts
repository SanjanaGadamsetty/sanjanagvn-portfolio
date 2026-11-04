export interface CodingProfile {
  id: string;
  platform: string;
  description: string;
  profileUrl?: string;
  icon: string; // Lucide icon name
}

export const codingProfiles: CodingProfile[] = [
  {
    id: 'leetcode',
    platform: 'LeetCode',
    description: 'Where I practice problem-solving',
    profileUrl: 'https://leetcode.com/u/sanjana-gadamsetty/', // Replace with your profile
    icon: 'Code2',
  },
  {
    id: 'github',
    platform: 'GitHub',
    description: 'Where my code and projects live',
    profileUrl: 'https://github.com/SanjanaGadamsetty', // Replace with your profile
    icon: 'Github',
  },
  {
    id: 'more',
    platform: 'More Profiles',
    description: 'Explore my other coding platforms',
    profileUrl: 'https://sanjanagadamsetty.github.io/Coding-Profiles-Of-Sanjana/', // Replace with your profile
    icon: 'ExternalLink',
  },
];
