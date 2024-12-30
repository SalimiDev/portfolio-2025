import React from 'react';

import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

// works data
import { experienceRecords } from './experience-records';

const WorkExperiences: React.FC = () => {
    return (
        <div style={{ opacity: 1, filter: 'blur(0px)', height: '100%', transform: 'none' }}>
            <div className='group relative size-full overflow-hidden rounded-[24px] bg-white/60 p-px dark:bg-white/10'>
                <GradientBackdrop />
                <div className='relative h-full'>
                    <div className='static flex h-full flex-col justify-start gap-6 p-8'>
                        <div className='flex flex-col items-start gap-1'>
                            <h4 className='text-xs font-medium uppercase opacity-60'>4 Years of</h4>
                            <h1 className='text-black text-center text-2xl font-medium uppercase opacity-90 dark:text-white'>
                                Experience
                            </h1>
                        </div>
                        <div className='relative z-10 flex flex-col lg:justify-around'>
                            {experienceRecords.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex flex-col items-stretch justify-between gap-3 py-4 md:flex-row md:items-center md:gap-2'>
                                    <div className='flex flex-col gap-1'>
                                        <h5 className='md:text-md text-black block text-xs font-medium opacity-35 dark:text-white md:hidden'>
                                            {item.dates}
                                        </h5>
                                        <h1
                                            className={`text-black w-fit text-left text-3xl font-medium text-base-300 dark:text-white md:text-4xl ${
                                                item.lineThrough ? 'line-through' : ''
                                            }`}
                                            style={{ opacity: item.opacity / 100 }}>
                                            {item.title}
                                        </h1>
                                    </div>
                                    <div className='flex flex-col md:items-end md:text-right'>
                                        <h3 className='text-black text-sm font-medium text-base-200 opacity-80 dark:text-white lg:text-lg'>
                                            {item.company}
                                        </h3>
                                        <h5 className='lg:text-md text-black hidden text-xs font-medium text-base-200 opacity-35 dark:text-white md:block'>
                                            {item.dates}
                                        </h5>
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
