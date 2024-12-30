'use client';

import Image from 'next/image';
import Link from 'next/link';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

import project_1 from '../../../../assets/images/project_1.png';

interface ResumeCardProps {
    config: Extract<GridCardConfig, { componentType: 'ResumeCard' }>;
}

const ProjectCard: React.FC<ResumeCardProps> = ({ config }) => {
    console.log('🚀 ~ config:', config);

    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='relative size-full overflow-hidden rounded-3xl bg-white/60 p-px dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}

                <div className='relative h-full overflow-hidden'>
                    <div className='relative flex h-full flex-col justify-center gap-6 overflow-hidden p-4 sm:px-8 sm:py-6'>
                        <div className='relative flex size-full flex-col items-stretch justify-between'>
                            <div className='absolute aspect-[578/433] size-full shadow-2xl'>
                                <Image
                                    decoding='async'
                                    loading='lazy'
                                    className='transparent rounded-lg'
                                    src={project_1}
                                    alt='project'
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col items-start gap-1'>
                            <h4 className='flex flex-wrap items-center gap-2 text-xs font-medium uppercase opacity-80'>
                                <span>Project at</span>
                                <span className='flex gap-1'>
                                    <Image
                                        decoding='async'
                                        loading='lazy'
                                        className='transparent rounded-lg'
                                        src={'images/eye.svg'}
                                        width={16}
                                        height={12}
                                        alt='TFL logo'
                                        objectFit='cover'
                                    />
                                    Paya
                                </span>
                            </h4>
                            <div className='flex w-full items-center gap-2'>
                                <h1 className='text-black text-2xl font-medium uppercase opacity-90 dark:text-white'>
                                    Station Landing Page
                                </h1>
                                <Link
                                    href='https://station.money/'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    className='dark:hover:bg-zinc-700/25 relative z-10 flex size-12 items-center justify-center rounded-full border-white/10 transition-all hover:border hover:bg-white'>
                                    <div className='size-8 opacity-50 transition-opacity hover:opacity-100'>
                                        {/* SVG code goes here */}
                                        <Image
                                            decoding='async'
                                            loading='lazy'
                                            className='transparent rounded-lg'
                                            src={'images/arrow-down.svg'}
                                            width={25}
                                            height={25}
                                            alt='TFL logo'
                                            // objectFit='cover'
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className='mt-1 flex flex-wrap gap-2'>
                                <div className='dark:hover:bg-zinc-950/80 inline-flex items-center rounded-full border border-neutral-focus px-2 py-0.5 text-xs font-semibold text-neutral-focus transition-colors'>
                                    Solo Developer
                                </div>
                                <div className='dark:hover:bg-zinc-950/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors'>
                                    Nextjs
                                </div>
                                {/* Other tags */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
