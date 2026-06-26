export type Experience = {
    id: string;
    title: string;
    company: string;
    companyLink: string;
    period: string;
    location: string;
    description: string[];
    positions: ExperiencePosition[];
    skills?: string[];
};

export type ExperiencePosition = {
    title: string;
    period: string;
    shortDescription?: string;
};

type ExperienceWithoutId = Omit<Experience, 'id'>;

const createExperienceId = (company: string): string => {
    const normalizedCompany = company
        .trim()
        .replace(/\s+/g, '')
        .replace(/[^a-zA-Z0-9]/g, '');
    return `${normalizedCompany}-1`;
};

const experiencesData: ExperienceWithoutId[] = [
    {
        title: 'Software Engineer Intern',
        company: 'Jilo Health',
        companyLink: 'https://jilohealth.com/',
        period: 'April 2026 – May 2026',
        location: 'Pune, India',
        positions: [
            {
                title: 'Software Engineer Intern',
                period: 'April 2026 – May 2026',
                shortDescription:
                    'Designed and built a 0-to-1 ETL integration architecture with modular adapters (MySQL, PostgreSQL, REST) to sync unstandardized hospital databases to a strict Supabase schema. Automated a high-concurrency calling infrastructure by engineering a priority-based scheduler and campaign queue. Developed a custom scheduling algorithm to intelligently outbound tasks, significantly increasing system throughput and operational efficiency.',
            },
        ],
        description: [
            'Designed and built a 0-to-1 ETL integration architecture with modular adapters (MySQL, PostgreSQL, REST) to sync unstandardized hospital databases to a strict Supabase schema.',
            'Automated a high-concurrency calling infrastructure by engineering a priority-based scheduler and campaign queue, optimizing task-dispatch system.',
            'Developed a custom scheduling algorithm to intelligently outbound tasks, significantly increasing system throughput and operational efficiency.',
            'Architected a stateful feedback-loop system to ingest real-time operational context, enabling dynamic updates to core data summaries for enhanced system intelligence.',
        ],
        skills: ['ETL', 'Supabase', 'PostgreSQL', 'MySQL', 'Node.js', 'System Architecture'],
    },
    {
        title: 'Student Partner',
        company: 'Internshala',
        companyLink: 'https://internshala.com/',
        period: 'February 2026 – April 2026',
        location: 'Pune, India',
        positions: [
            {
                title: 'Student Partner',
                period: 'February 2026 – April 2026',
                shortDescription:
                    'Served as a campus ambassador to bridge the gap between Internshala and students, driving platform registrations, organizing career-focused seminars, and promoting internship awareness across the college community.',
            },
        ],
        description: [
            "Spearheaded campus outreach initiatives to promote Internshala's platform, significantly driving student registrations and engagement for premium internship opportunities.",
            'Organized seminars and peer-to-peer mentoring sessions to educate students on resume building, upskilling, and navigating the internship search process.',
            'Acted as the primary liaison between Internshala and the college community, boosting brand awareness across academic networks and digital channels.',
            "Monitored campaign performance and student feedback, consistently meeting promotional targets and expanding the platform's active user base within the institution.",
        ],
        skills: ['Leadership', 'Marketing', 'Campus Outreach', 'Public Speaking', 'Event Management', 'Communication'],
    },
    {
        title: 'Club Member',
        company: 'Competitive Programming Club',
        companyLink: 'https://www.linkedin.com/company/competitive-programming-club-ait//',
        period: 'August 2024 – July 2025',
        location: 'Pune, India',
        positions: [
            {
                title: 'Club Member',
                period: 'August 2024 – July 2025',
                shortDescription:
                    'Actively engaged in competitive programming by solving over 1,000 algorithmic problems across platforms like Codeforces, LeetCode, and CodeChef. Achieved a "Specialist" rank on Codeforces (max rating: 1595) and participated in major contests including the ICPC Amritapuri Site.',
            },
        ],
        description: [
            'Solved 1,000+ complex data structure and algorithmic problems on platforms such as Codeforces, LeetCode, and CodeChef, significantly enhancing problem-solving speed and optimization skills.',
            'Attained a "Specialist" rating on Codeforces with a peak rating of 1595 by consistently performing well in global contests.',
            'Represented the institution in high-stakes team competitions, including the ICPC Amritapuri Site and the Midnight Code Cup.',
            'Collaborated with peers to facilitate club activities, contributing to the organization and execution of technical events like the national-level Codeft competition.',
        ],
        skills: [
            'C++',
            'Data Structures',
            'Algorithms',
            'Competitive Programming',
            'Problem Solving',
            'Team Collaboration',
        ],
    },
];

export const experiences: Experience[] = experiencesData.map(experience => ({
    ...experience,
    id: createExperienceId(experience.company),
}));
