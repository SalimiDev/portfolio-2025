'use client';

import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

const MovingBar: React.FC = () => {
    const repeatCount = 11;

    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='relative overflow-hidden rounded-3xl bg-white/60 p-px dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative flex h-7 w-full items-center justify-center overflow-hidden px-4 py-2 lg:h-[68px]'>
                    <div className='absolute flex animate-marquee gap-4'>
                        {Array.from({ length: repeatCount }).map((_, index) => (
                            <span key={index} className='flex items-center justify-center'>
                                <p className=''>Personal</p>
                                <span className='font-bold'>*</span>
                                <p className='font-bold'>Portfolio</p>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovingBar;
