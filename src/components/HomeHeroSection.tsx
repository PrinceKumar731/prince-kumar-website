'use client';

import ArrowLink from '@/components/ArrowLink';
import { SOCIAL_LINKS } from '@/data/socialLinks';
import { TypeAnimation } from 'react-type-animation';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiKofi } from 'react-icons/si';

export default function HomeHeroSection() {
    return (
        <main id='about' className='min-h-[100dvh] pt-[80px] flex flex-col justify-center px-4 bg-background'>
            <div className='max-w-6xl mx-auto w-full text-left'>
                {/* Typing Effect */}
                <div className='mb-8'>
                    <h1 className='text-5xl md:text-7xl font-bold text-foreground mb-4'>
                        Prince Kumar
                        <TypeAnimation
                            sequence={['Software Engineer', 1000, 'Full Stack Developer', 1000, 'Problem Solver', 1000]}
                            wrapper='span'
                            speed={50}
                            style={{
                                fontSize: '0.5em',
                                display: 'inline-block',
                                marginLeft: '12px',
                                color: 'var(--primary)',
                            }}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </h1>
                </div>
                <div className='max-w-4xl mb-12'>
                    <p className='text-lg md:text-xl text-muted-foreground leading-relaxed mb-6'>
                        I'm a passionate software engineer focused on building reliable, high-performance software 
                        that solves real problems. I enjoy working across the full stack and am always eager 
                        to learn new technologies and take on challenging projects.
                    </p>
                </div>
                <div className='flex justify-start items-center gap-8 mb-10'>
                    <ArrowLink label='View Resume' href={SOCIAL_LINKS.resume} target='_blank' />
                </div>
                <div className='flex justify-start items-center gap-6 mb-8'>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Visit my LinkedIn profile'
                        className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                    >
                        <FaLinkedin size={40} />
                    </a>
                    <a
                        href={SOCIAL_LINKS.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Visit my GitHub profile'
                        className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                    >
                        <FaGithubSquare size={40} />
                    </a>
                    <a
                        href={SOCIAL_LINKS.email}
                        aria-label='Send me an email'
                        className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                    >
                        <MdEmail size={40} />
                    </a>
                </div>
            </div>
        </main>
    );
}
