import { memo } from 'react';

import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

const repeatCount = 14;

const MovingBar: React.FC = memo(() => {
    return (
        <div className='blur-0 h-full transform-none opacity-100'>
            <div className='relative h-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='mask-gradient-horizontal relative mx-auto flex size-full items-center justify-center overflow-hidden px-4 py-2 lg:h-17'>
                    <div className='absolute flex w-full animate-marquee gap-4'>
                        {Array.from({ length: repeatCount }).map((_, index) => (
                            <span key={index} className='flex gap-1'>
                                <h3 className='font-bold text-nowrap'>Mehdi Salimi</h3>
                                <span className=''>&copy;2025</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default MovingBar;
