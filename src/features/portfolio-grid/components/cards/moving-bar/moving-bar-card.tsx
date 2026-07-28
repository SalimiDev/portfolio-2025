import { type CSSProperties, memo } from 'react';

import GradientBackdrop from '@/components/gradient-backdrop';
import { PORTFOLIO_YEAR } from '@/features/portfolio-grid/config/portfolio';

const repeatCount = 14;
const marqueeCopies = ['primary', 'duplicate'] as const;
const movingBarItemStepRem = 11.5;
const movingBarMarqueeStyle = {
    '--marquee-offset': `-${repeatCount * movingBarItemStepRem}rem`
} as CSSProperties;

const MovingBar: React.FC = memo(() => {
    return (
        <div className='blur-0 h-full transform-none opacity-100'>
            <div className='relative h-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='mask-gradient-horizontal relative mx-auto flex size-full items-center overflow-hidden px-4 py-2 lg:h-17'>
                    <div style={movingBarMarqueeStyle} className='relative flex w-max animate-moving-marquee'>
                        {marqueeCopies.map((copy) => (
                            <div
                                key={copy}
                                aria-hidden={copy === 'duplicate' ? true : undefined}
                                className='flex shrink-0 gap-4 pr-4'>
                                {Array.from({ length: repeatCount }).map((_, index) => (
                                    <span key={`${copy}-${index}`} className='flex w-42 shrink-0 gap-1'>
                                        <span className='font-bold text-nowrap'>Mehdi Salimi</span>
                                        <span>&copy;{PORTFOLIO_YEAR}</span>
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default MovingBar;
