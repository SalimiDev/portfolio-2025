import React from 'react';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

interface ExperiencesCardProps {
    config: Extract<GridCardConfig, { componentType: 'WorkExperiences' }>;
}

const WorkExperiences: React.FC<ExperiencesCardProps> = ({ config }) => {
    const { yearsOfExperience, experiences } = config;

    return (
        <div style={{ opacity: 1, filter: 'blur(0px)', height: '100%', transform: 'none' }}>
            <div className='group relative size-full overflow-hidden rounded-[24px] bg-white/60 p-px dark:bg-white/10'>
                <GradientBackdrop />
                <div className='relative h-full'>
                    <div className='static flex h-full flex-col justify-start gap-6 p-8'>
                        <div className='flex flex-col-reverse items-start gap-1'>
                            <h1 className='text-black text-center text-2xl font-medium uppercase opacity-90 dark:text-white'>
                                Experience
                            </h1>
                            <h2 className='text-sm font-medium uppercase opacity-60'>{yearsOfExperience} Years of</h2>
                        </div>
                        <div className='relative z-10 flex flex-col lg:justify-around'>
                            {experiences.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex flex-col items-stretch justify-between gap-3 py-4 md:flex-row md:items-center md:gap-2'>
                                    <div className='flex flex-col-reverse gap-1'>
                                        <h2
                                            className={`text-black w-fit text-left text-2xl font-medium text-base-300 dark:text-white sm:text-3xl md:text-4xl ${
                                                item.lineThrough ? 'line-through' : ''
                                            }`}
                                            style={{ opacity: item.opacity / 100 }}>
                                            {item.title}
                                        </h2>
                                        <h3 className='md:text-md text-black block text-xs font-medium opacity-35 dark:text-white md:hidden'>
                                            {item.dates}
                                        </h3>
                                    </div>
                                    <div className='flex flex-col md:items-end md:text-right'>
                                        <h2 className='text-black text-sm font-medium text-base-200 opacity-80 dark:text-white lg:text-lg'>
                                            {item.company}
                                        </h2>
                                        <h3 className='lg:text-md text-black hidden text-xs font-medium text-base-200 opacity-35 dark:text-white md:block'>
                                            {item.dates}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperiences;
