import React, { memo } from 'react';

import GradientBackdrop from '@/components/gradient-backdrop';
import type { GridCardConfig } from '@/features/portfolio-grid/model/grid-card.types';

interface ExperiencesCardProps {
    config: Extract<GridCardConfig, { componentType: 'WorkExperiences' }>;
}

const WorkExperiences: React.FC<ExperiencesCardProps> = memo(({ config }) => {
    const { yearsOfExperience, experiences } = config;

    return (
        <section className='blur-0 h-full transform-none opacity-100'>
            <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                <GradientBackdrop />
                <div className='relative h-full'>
                    <div className='static flex h-full flex-col justify-start gap-6 p-8'>
                        <div className='flex flex-col-reverse items-start gap-1'>
                            <h2 className='text-center text-2xl font-medium text-black uppercase opacity-90 dark:text-white'>
                                Experience
                            </h2>
                            <p className='text-sm font-medium uppercase opacity-60'>{yearsOfExperience} Years of</p>
                        </div>
                        <div className='relative z-10 flex flex-col lg:justify-around'>
                            {experiences.map((item, index) => (
                                <article
                                    key={index}
                                    className='flex flex-col items-stretch justify-between gap-3 py-4 md:flex-row md:items-center md:gap-2'>
                                    <div className='flex flex-col-reverse gap-1'>
                                        <h3
                                            className={`w-fit text-left text-2xl font-medium text-base-300 sm:text-2xl md:text-2xl dark:text-white ${
                                                item.lineThrough ? 'line-through' : ''
                                            }`}
                                            style={{ opacity: item.opacity / 100 }}>
                                            {item.company}
                                        </h3>
                                        <time className='md:text-md block text-xs font-medium text-black opacity-35 md:hidden dark:text-white'>
                                            {item.dates}
                                        </time>
                                    </div>
                                    <div className='flex flex-col md:items-end md:text-right'>
                                        <p className='text-md lg:text-md font-medium text-base-200 opacity-80 dark:text-white'>
                                            {item.title}
                                        </p>
                                        <time className='lg:text-md hidden text-xs font-medium text-base-200 opacity-35 md:block dark:text-white'>
                                            {item.dates}
                                        </time>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default WorkExperiences;
