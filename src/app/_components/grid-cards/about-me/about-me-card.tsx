import { memo } from 'react';
import Image from 'next/image';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

interface AboutMeCardProps {
    config: Extract<GridCardConfig, { componentType: 'AboutMeCard' }>;
}

const AboutMeCard: React.FC<AboutMeCardProps> = memo(({ config }) => {
    const { avatar, fullName, description } = config;

    return (
        <section className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
            <GradientBackdrop />
            <div className='static flex flex-col items-center gap-6 px-6 py-5 sm:items-start sm:px-8 sm:py-6'>
                <div className='flex flex-col items-center gap-2 sm:flex-row sm:justify-start sm:gap-6'>
                    <figure className='shadow-memoji relative z-0 size-16 min-w-16 overflow-hidden rounded-full p-0.5 sm:size-24 sm:min-w-24'>
                        <Image
                            className='rounded-full'
                            src={avatar}
                            alt={fullName}
                            width={90}
                            height={90}
                            style={{ width: 'auto', height: 'auto' }}
                            priority={true}
                            // loading='lazy'
                        />
                    </figure>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-2xl leading-tight font-medium text-slate-900 sm:text-4xl dark:text-white'>
                            {fullName}
                        </h1>
                    </div>
                </div>
                <p className='text-xs leading-6 tracking-wide text-slate-900 sm:text-sm dark:text-white'>
                    {description}
                </p>
            </div>
        </section>
    );
});

export default AboutMeCard;
