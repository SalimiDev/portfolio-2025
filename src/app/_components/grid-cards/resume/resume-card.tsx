'use client';

import Image from 'next/image';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

interface ResumeCardProps {
    config: Extract<GridCardConfig, { componentType: 'ResumeCard' }>;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ config }) => {
    return (
        <div style={{ opacity: 1, filter: 'blur(0px)', height: '100%', transform: 'none' }}>
            <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px dark:bg-white/10'>
                <GradientBackdrop />
                <div className='relative h-full'>
                    <div className='relative flex h-full flex-col justify-center gap-6 px-8 py-6'>
                        <div className='flex w-full items-center justify-between'>
                            <div className='flex flex-col items-start gap-1'>
                                <h4 className='text-xs font-medium uppercase opacity-50'>2025 CV</h4>
                                <h1 className='text-black text-2xl font-medium uppercase opacity-90 dark:text-white'>
                                    Resume
                                </h1>
                            </div>
                            <div className='flex items-center gap-2 lg:gap-6'>
                                <a href='/MehdiSalimi-Resume.pdf' download='' className='relative z-20 cursor-pointer'>
                                    <div className='size-10 opacity-50 transition-opacity hover:opacity-100'>
                                        <Image alt='asc' src={'/images/arrow-down.svg'} width={36} height={36} />
                                    </div>
                                </a>
                                <a href='/MehdiSalimi-Resume.pdf' download='' className='relative z-20 cursor-pointer'>
                                    <div className='size-10 opacity-50 transition-opacity hover:opacity-100'>
                                        <Image alt='asc' src={'/images/eye.svg'} width={36} height={36} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeCard;
