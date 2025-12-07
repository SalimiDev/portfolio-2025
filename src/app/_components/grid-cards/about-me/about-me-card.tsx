import Image from 'next/image';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

interface AboutMeCardProps {
    config: Extract<GridCardConfig, { componentType: 'AboutMeCard' }>;
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ config }) => {
    const { avatar, fullName, description } = config;

    return (
        <section className='group relative size-full overflow-hidden rounded-[24px] bg-white/60 p-px shadow-2xl dark:bg-white/10'>
            <GradientBackdrop />
            <div className='static flex flex-col items-center gap-6 px-6 py-5 sm:items-start sm:px-8 sm:py-6'>
                <div className='flex flex-col items-center gap-2 sm:flex-row sm:justify-start sm:gap-6'>
                    <figure className='shadow-memoji relative z-0 size-16 min-w-16 overflow-hidden rounded-full p-[2px] sm:size-24 sm:min-w-24'>
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
                        <h1 className='text-slate-900 text-2xl font-medium leading-tight dark:text-white sm:text-4xl'>
                            {fullName}
                        </h1>
                    </div>
                </div>
                <p className='text-slate-900 text-xs leading-6 tracking-wide dark:text-white sm:text-sm'>
                    {description}
                </p>
            </div>
        </section>
    );
};

export default AboutMeCard;
