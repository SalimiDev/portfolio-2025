import Image from 'next/image';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

interface TechCardProps {
    config: Extract<GridCardConfig, { componentType: 'TechCard' }>;
}
const TechCard: React.FC<TechCardProps> = ({ config }) => {
    const { technologies } = config;

    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='group relative size-full overflow-hidden rounded-[24px] bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative size-full overflow-hidden px-8 py-16'>
                    <div className='mask-gradient-horizontal mx-auto'>
                        <div className='flex size-16 animate-marquee gap-4'>
                            {technologies.map((tech, _index) => (
                                <figure
                                    key={_index}
                                    className='bg-neutral-200 mx-2 my-0 flex aspect-square w-[72px] items-center justify-center gap-2 rounded-2xl dark:bg-neutral'>
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
                    </div>

                    <div className='mt-14 flex flex-col-reverse'>
                        <h2 className='text-2xl font-semibold text-base-200 dark:text-primary-content'>TECH I ❤️</h2>
                        <p className='text-neutral dark:text-base-content'>CURRENTLY USING</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechCard;
