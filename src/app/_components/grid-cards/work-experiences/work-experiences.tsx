import React, { memo } from 'react';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

import { motion } from 'framer-motion';

interface ExperiencesCardProps {
    config: Extract<GridCardConfig, { componentType: 'WorkExperiences' }>;
}

const WorkExperiences: React.FC<ExperiencesCardProps> = memo(({ config }) => {
    const { yearsOfExperience, experiences } = config;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: 'backInOut', delay: 0.1 }}
            className='h-full transform-none opacity-100 blur-0'>
            <div className='h-full transform-none opacity-100 blur-0'>
                <div className='group relative size-full overflow-hidden rounded-[24px] bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                    <GradientBackdrop />
                    <div className='relative h-full'>
                        <div className='static flex h-full flex-col justify-start gap-6 p-8'>
                            <div className='flex flex-col-reverse items-start gap-1'>
                                <h2 className='text-black text-center text-2xl font-medium uppercase opacity-90 dark:text-white'>
                                    Experience
                                </h2>
                                <p className='text-sm font-medium uppercase opacity-60'>{yearsOfExperience} Years of</p>
                            </div>
                            <div className='relative z-10 flex flex-col lg:justify-around'>
                                {experiences.map((item, index) => (
                                    <div
                                        key={index}
                                        className='flex flex-col items-stretch justify-between gap-3 py-4 md:flex-row md:items-center md:gap-2'>
                                        <div className='flex flex-col-reverse gap-1'>
                                            <h2
                                                className={`text-black w-fit text-left text-2xl font-medium text-base-300 dark:text-white sm:text-2xl md:text-2xl ${
                                                    item.lineThrough ? 'line-through' : ''
                                                }`}
                                                style={{ opacity: item.opacity / 100 }}>
                                                {item.company}
                                            </h2>
                                            <h3 className='md:text-md text-black block text-xs font-medium opacity-35 dark:text-white md:hidden'>
                                                {item.dates}
                                            </h3>
                                        </div>
                                        <div className='flex flex-col md:items-end md:text-right'>
                                            <h2 className='text-black text-md lg:text-md font-medium text-base-200 opacity-80 dark:text-white'>
                                                {item.title}
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
        </motion.div>
    );
});

export default WorkExperiences;
