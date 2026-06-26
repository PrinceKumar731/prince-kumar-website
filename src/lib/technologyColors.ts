export const technologyColors: Record<string, string> = {
    // Frontend
    TypeScript: '#5aa2f5',
    JavaScript: '#fde047',
    React: '#67e8f9',
    'Next.js': '#cbd5e1',
    NextJS: '#cbd5e1',
    'Vue.js': '#86efac',
    Angular: '#fda4af',
    Svelte: '#fdba74',
    TailwindCSS: '#7dd3fc',
    'Tailwind CSS': '#7dd3fc',
    CSS: '#1293dd',
    HTML: '#fb923c',
    SCSS: '#f9a8d4',
    Sass: '#f9a8d4',

    // Backend
    'Node.js': '#86efac',
    Express: '#cbd5e1',
    Python: '#93c5fd',
    Django: '#6ee7b7',
    Flask: '#cbd5e1',
    FastAPI: '#5eead4',
    Java: '#fdba74',
    'Spring Boot': '#bef264',
    'C#': '#86efac',
    '.NET': '#a5b4fc',
    Go: '#67e8f9',
    Rust: '#cbd5e1',
    PHP: '#a5b4fc',

    // Databases
    MongoDB: '#86efac',
    PostgreSQL: '#93c5fd',
    MySQL: '#7dd3fc',
    Redis: '#fca5a5',
    SQLite: '#94a3b8',
    Firebase: '#fcd34d',
    Supabase: '#6ee7b7',

    // Cloud & DevOps
    AWS: '#fdba74',
    'Google Cloud': '#93c5fd',
    Azure: '#7dd3fc',
    Docker: '#60a5fa',
    Kubernetes: '#818cf8',
    Vercel: '#cbd5e1',
    Netlify: '#5eead4',
    Heroku: '#c4b5fd',
    'Oracle Cloud': '#A45A52',

    // Tools & Services
    Git: '#fdba74',
    GitHub: '#94a3b8',
    GitLab: '#fb923c',
    Stripe: '#a5b4fc',
    UploadThing: '#fda4af',
    Mailgun: '#fca5a5',
    Upstash: '#6ee7b7',
    Prisma: '#94a3b8',
    GraphQL: '#f0abfc',
    'REST API': '#7dd3fc',
    tRPC: '#93c5fd',
    Figma: '#c4b5fd',
    Blender: '#E87D0D',
    'Premiere Pro': '#9999FF',
    'After Effects': '#CF96FD',
    Blockbench: '#1a91d7',
    Audacity: '#334dff',

    // Mobile
    'React Native': '#67e8f9',
    Flutter: '#7dd3fc',
    Swift: '#fb923c',
    Kotlin: '#a5b4fc',

    // Testing
    Jest: '#fda4af',
    Cypress: '#94a3b8',
    Playwright: '#86efac',

    // Build Tools
    Gradle: '#065668',
    Vite: '#9467fd',

    // Other
    'Google Gemini': '#818cf8',
    'Generative AI': '#f472b6',
    'Multimodal AI': '#fb923c',
    WebSocket: '#67e8f9',
    'Real-time Sync': '#34d399',
    'Cloud Storage': '#60a5fa',
    'Data Analysis': '#fbbf24',
    'Financial Modeling': '#818cf8',
    'Machine Learning': '#6366f1',
    'Deep Learning': '#4f46e5',
    'Neural Networks': '#3b82f6',
    'Financial Markets': '#10b981',
    Nginx: '#009639',
    Electron: '#47848F',
    NGROK: '#1F1E1E',
    Automation: '#94a3b8',
    STOMP: '#f59e0b',
    SHAP: '#f472b6',
    XGBoost: '#10b981',
    Leaflet: '#199900',

    default: '#93c5fd',
};

export const getTechnologyColor = (technology: string): string => {
    return technologyColors[technology] || technologyColors.default;
};

export const getTextColor = (hexColor: string) => {
    hexColor = hexColor.replace('#', '');

    // Convert hex to RGB
    const r = parseInt(hexColor.substring(0, 2), 16); // Red
    const g = parseInt(hexColor.substring(2, 4), 16); // Green
    const b = parseInt(hexColor.substring(4, 6), 16); // Blue

    // Calculate luminance
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    return luminance > 128 ? '#000000' : '#FFFFFF';
};
