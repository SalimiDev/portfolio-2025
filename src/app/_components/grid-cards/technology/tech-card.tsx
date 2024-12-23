'use client';

import Image from 'next/image';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

interface TechCardProps {
    config: Extract<GridCardConfig, { componentType: 'TechCard' }>;
}
const TechCard: React.FC<TechCardProps> = ({ config }) => {
    const { technologies } = config;

    return (
        <div style={{ opacity: 1, filter: 'blur(0px)', height: '100%', transform: 'none' }}>
            <div className='group relative size-full overflow-hidden rounded-[24px] bg-white/60 p-px dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative size-full overflow-hidden px-8 py-6'>
                    <div
                        style={{
                            maskImage:
                                'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
                            margin: 'auto'
                        }}>
                        <div className='flex size-16 animate-marquee gap-4'>
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className='bg-neutral-200 mx-2 my-0 flex aspect-square w-[72px] items-center justify-center gap-2 rounded-2xl dark:bg-neutral'>
                                    <Image
                                        src={tech.techLogo}
                                        alt={tech.techName}
                                        loading='lazy'
                                        width={36}
                                        height={36}
                                    />
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='mt-12'>
                        <p className='text-base-content'>CURRENTLY USING</p>
                        <h3 className='text-2xl font-semibold text-primary-content'>TECH I ❤️</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechCard;
