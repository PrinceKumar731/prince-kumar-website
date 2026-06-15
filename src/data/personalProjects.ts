export type PersonalProject = {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    image: string;
    technologies: string[];
    href: string;
    period: string;
};

export const projects: PersonalProject[] = [
    {
        id: 'newscaster-ai',
        title: 'NewsCasterAI',
        description: `An end-to-end automated news production platform leveraging Google Gemini and multimodal AI. The system automates the entire pipeline: fetching real-time headlines, writing optimized scripts using LLMs, generating human-like speech with TTS, and adding relevant visuals to produce final news videos ready for automated publishing.`,
        shortDescription: `Autonomous news production platform using Google Gemini for end-to-end video generation.
Automates headline fetching, scriptwriting, speech generation, and social publishing.`,
        image: '/images/projects/newscaster-ai.png',
        technologies: ['Python', 'Google Gemini', 'Multimodal AI', 'Generative AI', 'Automation'],
        href: 'https://github.com/PrinceKumar731/NEWSCASTERAI',
        period: 'Present',
    },
    {
        id: 'pm-predictor',
        title: 'Asia Regional PM2.5 Prediction System',
        description: `A high-resolution environmental monitoring and predictive dashboard. It provides granular PM2.5 forecasting across Asia by integrating spatial-temporal modeling with multi-source meteorological and satellite data. Features an XGBoost-powered pipeline, SHAP-based interpretability, and an interactive Leaflet map mapping concentrations to health metrics like cigarette-equivalent damage.`,
        shortDescription: `ML-powered PM2.5 forecasting system for Asia using XGBoost and spatial-temporal modeling.
Features real-time mapping, SHAP interpretability, and health risk quantization.`,
        image: '/images/projects/pm-predictor.png',
        technologies: ['Python', 'XGBoost', 'SHAP', 'Node.js', 'React', 'TypeScript', 'Leaflet'],
        href: 'https://github.com/PrinceKumar731/PM_PREDICTOR',
        period: 'Present',
    },
    {
        id: 'colaboard',
        title: 'Colaboard',
        description: `A real-time collaborative whiteboard inspired by Excalidraw, designed for high-performance visual brainstorming. It features a Redis-backed state replay system, allowing users to see board history. Built with a Spring Boot backend and React frontend, it uses STOMP over WebSockets for seamless multi-user synchronization and room-based sharing.`,
        shortDescription: `Real-time collaborative whiteboard with Redis-backed state replay and room-based sharing.
Features live multi-user synchronization and a sleek drawing interface inspired by Excalidraw.`,
        image: '/images/projects/colaboard.png',
        technologies: ['React', 'Vite', 'Spring Boot', 'WebSocket', 'STOMP', 'Redis'],
        href: 'https://github.com/PrinceKumar731/COLABOARD',
        period: 'Present',
    },
    {
        id: 'redstone',
        title: 'RedStone',
        description: `A desktop Minecraft server manager that removes the technical complexity of hosting local servers. It provides a modern web dashboard for creating and managing servers without manual configuration of JARs or Java runtimes. Built with Spring Boot and React, it includes a bundled Windows installer and custom Java runtime for a one-click experience.`,
        shortDescription: `Desktop app with a web dashboard for one-click local Minecraft server hosting and management.
Bundles Java runtime and Windows installer to simplify server setup for non-technical users.`,
        image: '/images/projects/redstone.png',
        technologies: ['Java', 'Spring Boot', 'React', 'Windows Installer'],
        href: 'https://github.com/PrinceKumar731/REDSTONE',
        period: 'Present',
    },
    {
        id: 'cloudit',
        title: 'CloudItz',
        description: `A full-stack cloud media management platform for organized, folder-based photo storage. It provides real-time updates as media is processed and managed. The platform utilizes a Spring Boot backend for scalable data handling and integrates external storage APIs for secure, efficient media organization and retrieval.`,
        shortDescription: `Full-stack cloud media manager for folder-based photo organization and real-time updates.
Combines Spring Boot backend with React frontend for a scalable media management solution.`,
        image: '/images/projects/cloudit.png',
        technologies: ['Java', 'Spring Boot', 'React', 'JavaScript', 'Cloud Storage'],
        href: 'https://github.com/PrinceKumar731/CLOUDITZ',
        period: 'Present',
    },
    {
        id: 'movieverse',
        title: 'MovieVerse',
        description: `A modern movie discovery web application featuring a high-performance, Netflix-style UI. It enables users to explore trending and top-rated films with real-time, debounced search suggestions and infinite scrolling. Built with React and Vite, it integrates the TMDB API to provide detailed cast info, trailers, and categorized browsing.`,
        shortDescription: `Modern movie discovery web app with a Netflix-style UI and real-time search capabilities.
Built with React and Vite, featuring infinite scrolling and TMDB API integration.`,
        image: '/images/projects/movieverse.png',
        technologies: ['React', 'Vite', 'Tailwind CSS', 'TMDB API', 'JavaScript'],
        href: 'https://github.com/PrinceKumar731/MOVIE-VERSE',
        period: 'Present',
    },
];
