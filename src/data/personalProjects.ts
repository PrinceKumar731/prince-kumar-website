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
        description: `An end-to-end automated news production platform leveraging Google Gemini and multimodal AI. The system automates the entire pipeline: fetching real-time headlines, writing optimized scripts, generating human-like speech, and adding relevant visuals to produce final news videos ready for automated YouTube publishing.`,
        shortDescription: `Autonomous news production platform using Google Gemini for end-to-end video generation.
Automates headline fetching, scriptwriting, speech generation, and social publishing.`,
        image: '/images/projects/newscaster-ai.png',
        technologies: ['Python', 'Google Gemini', 'Multimodal AI', 'Generative AI', 'Automation'],
        href: 'https://github.com/PrinceKumar731/NEWSCASTERAI',
        period: 'Present',
    },
    {
        id: 'redstone',
        title: 'Redstone',
        description: `Redstone is a lightweight desktop application designed for creating and managing Minecraft servers locally. It features a simple web-based dashboard that removes the complexity of manually downloading server jars and handling configuration files. Built with JavaScript, it provides a user-friendly interface for server management on local machines.`,
        shortDescription: `Desktop app with a web dashboard for effortless local Minecraft server creation and management.
Simplifies server jar downloads and configuration through a centralized UI.`,
        image: '/images/projects/redstone.png',
        technologies: ['JavaScript', 'Node.js', 'Minecraft API'],
        href: 'https://github.com/PrinceKumar731/REDSTONE',
        period: 'Present',
    },
    {
        id: 'colaboard',
        title: 'Colaboard',
        description: `A real-time collaborative whiteboard designed for teams to brainstorm, sketch, and share ideas seamlessly. Colaboard focuses on high-performance real-time interactions, allowing multiple users to contribute to a shared canvas simultaneously. Built with Java, it emphasizes reliable synchronization and ease of sharing via simple links.`,
        shortDescription: `Real-time collaborative whiteboard for remote teams to brainstorm and sketch ideas together.
Features seamless canvas synchronization and instant sharing capabilities.`,
        image: '/images/projects/colaboard.png',
        technologies: ['Java', 'WebSocket', 'Swing', 'Real-time Sync'],
        href: 'https://github.com/PrinceKumar731/COLABOARD',
        period: 'Present',
    },
    {
        id: 'cloudit',
        title: 'CloudIt',
        description: `CloudIt is a full-stack media management platform that enables users to upload, organize, and manage photos in a folder-based structure. It provides real-time updates as media is processed and organized. The project utilizes a Spring Boot backend for robust data handling and a React-based frontend for a responsive user experience.`,
        shortDescription: `Full-stack cloud media manager for folder-based photo organization and real-time updates.
Combines Spring Boot backend with React frontend for a high-performance management tool.`,
        image: '/images/projects/cloudit.png',
        technologies: ['Java', 'Spring Boot', 'React', 'JavaScript', 'Cloud Storage'],
        href: 'https://github.com/PrinceKumar731/CLOUDITZ',
        period: 'Present',
    },
    {
        id: 'pm-predictor',
        title: 'Asia Regional PM2.5 Prediction System',
        description: `A high-resolution environmental monitoring and predictive dashboard powered by an XGBoost machine learning pipeline. It provides granular PM2.5 forecasting across Asia by integrating spatial-temporal modeling with multi-source meteorological data. Features a SHAP-based interpretability engine and maps concentrations to health metrics, such as cigarette-equivalent damage, visualized via a Leaflet-based interactive map.`,
        shortDescription: `ML-powered PM2.5 forecasting system for Asia using XGBoost and spatial-temporal modeling.
Features real-time mapping, SHAP interpretability, and health risk quantization.`,
        image: '/images/projects/pm-predictor.png',
        technologies: ['Python', 'XGBoost', 'SHAP', 'Node.js', 'Leaflet', 'Machine Learning'],
        href: 'https://github.com/PrinceKumar731/PM_PREDICTOR',
        period: 'Present',
    },
    {
        id: 'deeplob',
        title: 'DeepLOB Forecaster',
        description: `A framework for analyzing and backtesting short-term price movements using High-Frequency Limit Order Book (LOB) data. It features a live WebSocket client for 100ms Binance data ingestion and implements complex architectures like CNN-LSTMs (DeepLOB) and LightGBM. Includes a latency-aware trading simulator and a React-based dashboard styled after the Binance interface.`,
        shortDescription: `High-frequency trading framework using Deep Learning (CNN-LSTM) to predict LOB dynamics.
Includes live Binance data ingestion, latency-aware backtesting, and interactive dashboards.`,
        image: '/images/projects/deeplob.png',
        technologies: ['Python', 'PyTorch', 'FastAPI', 'React', 'WebSocket', 'Deep Learning'],
        href: 'https://github.com/PrinceKumar731/DEEPLOB-FORECASTER',
        period: 'Present',
    },
    {
        id: 'movieverse',
        title: 'MovieVerse',
        description: `MovieVerse is a modern movie discovery application that allows users to explore trending, popular, and top-rated films. It features a real-time search engine with debounced suggestions and categorized browsing for a premium user experience. Built using React and Vite for blazing-fast performance.`,
        shortDescription: `Modern movie discovery web app for exploring trending films with real-time search capabilities.
Built with React and Vite, featuring debounced search suggestions and categorized browsing.`,
        image: '/images/projects/movieverse.png',
        technologies: ['React', 'JavaScript', 'Vite', 'TMDB API', 'CSS'],
        href: 'https://github.com/PrinceKumar731/MOVIE-VERSE',
        period: 'Present',
    },
];
