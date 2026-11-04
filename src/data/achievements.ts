export interface Achievement { id: string; title: string; date: string; description: string; image: string; certificate?: string; link?: string; }
export const achievements: Achievement[] = [
 { id:'ach-1', 
    title:'Best Paper Presentation Award', 
    date:'Dec 2025', 
    description:'Research paper on "Graphene" at the 4th International Conference on Sustainable Materials & Technologies for Bio and Energy Applications & Indo-Taiwan Workshop on Renewable Energy', 
    image:'src/data/certs/ach-img/graphene-pp.png' },

 { id:'ach-2', 
    title:'Finalist of Green Ideathon - IIT BHU', 
    date:'May 2026', 
    description:'Cleared Round 2 and got selected for the final round of Green Ideathon organized by IIT BHU, a national-level competition for innovative ideas on sustainability.', 
    image:'src/data/certs/ach-img/green-ideathon.png' },

 { id:'ach-3', 
    title:'ICPC AlgoQueen 2026', 
    date:'June 2026', 
    description:'Secured 248th rank in ICPC AlgoQueen 2026, a competitive programming contest for women organized by the International Collegiate Programming Contest (ICPC).', 
    image:'src/data/certs/ach-img/icpc-algoqueen.png' },

 { id:'ach-4', 
    title:'NASSCOM - Data Science and Analytics Gold Badge', 
    date:'2026', 
    description:'Awarded the NASSCOM Data Science and Analytics Gold Badge for demonstrating proficiency in data science and analytics skills through an assessment process.', 
    image:'src/data/certs/ach-img/nasscom-gold.png' },

 { id:'ach-5', 
    title:'Google AI Essentials Certificate', 
    date:'June 2026', 
    description:'Successfully completed the Google AI Essentials Certificate program, gaining foundational knowledge in artificial intelligence and its applications.', 
    image:'src/data/certs/ach-img/g-5.png' },
];
