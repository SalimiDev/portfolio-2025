import { type CSSProperties, memo } from 'react';

import Image from 'next/image';

import GradientBackdrop from '@/components/gradient-backdrop';
import type { GridCardConfig } from '@/features/portfolio-grid/model/grid-card.types';

interface TechCardProps {
    config: Extract<GridCardConfig, { componentType: 'TechCard' }>;
}

const marqueeCopies = ['primary', 'duplicate'] as const;
const techMarqueeItemStepRem = 6.5;

type MarqueeStyle = CSSProperties & {
    '--marquee-offset': string;
};

const TechCard: React.FC<TechCardProps> = memo(({ config }) => {
    const { technologies } = config;
    const marqueeStyle = {
        '--marquee-offset': `-${technologies.length * techMarqueeItemStepRem}rem`
    } as MarqueeStyle;

    return (
        <div className='blur-0 h-full transform-none opacity-100'>
            <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative size-full overflow-hidden px-8 py-16'>
                    <div className='mask-gradient-horizontal mx-auto overflow-hidden'>
                        <div style={marqueeStyle} className='relative flex w-max animate-tech-marquee'>
                            {marqueeCopies.map((copy) => (
                                <div
                                    key={copy}
                                    aria-hidden={copy === 'duplicate' ? true : undefined}
                                    className='flex h-16 shrink-0 gap-8 pr-6 pl-2'>
                                    {technologies.map((tech) => (
                                        <figure
                                            key={`${copy}-${tech.techName}`}
                                            className='my-0 flex aspect-square w-18 shrink-0 items-center justify-center gap-2 rounded-2xl bg-neutral-content dark:bg-neutral'>
                                            <Image
                                                src={tech.techLogo}
                                                alt={tech.techName}
                                                loading='lazy'
                                                width={36}
                                                height={36}
                                            />
                                        </figure>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mt-14 flex flex-col-reverse'>
                        <h2 className='text-2xl font-semibold text-base-200 dark:text-primary-content'>TECH I ❤️</h2>
                        <p className='text-neutral dark:text-base-content'>CURRENTLY USING</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default TechCard;
