import type { StaticImageData } from 'next/image';

// We'll export an empty or generic image mapping for now.
// The user should upload their own images to /public/images/projects/
// and then update these mappings if they want to use StaticImageData imports.

export const projectImages: Record<string, StaticImageData | string> = {
    'newscaster-ai': '/images/projects/newscaster-ai.png',
    redstone: '/images/projects/redstone.png',
    colaboard: '/images/projects/colaboard.png',
    cloudit: '/images/projects/cloudit.png',
    'pm-predictor': '/images/projects/pm-predictor.png',
    movieverse: '/images/projects/movieverse.png',
    chatapp: '/images/projects/chatapp.png',
};
