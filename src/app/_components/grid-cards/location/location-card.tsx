'use client';

import Image from 'next/image';

import { useTheme } from 'next-themes';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';
import location_light from '@/assets/images/location_light.webp';

interface LocationCardProps {
    config: Extract<GridCardConfig, { componentType: 'LocationCard' }>;
}

const LocationCard: React.FC<LocationCardProps> = ({ config }) => {
    const { resolvedTheme } = useTheme();

    const { locationImage } = config;

    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='transparent absolute inset-0 z-50 size-full rounded-lg shadow-2xl'>
                    <Image
                        src={resolvedTheme === 'light' ? location_light : locationImage}
                        alt='location'
                        priority={true}
                        placeholder='blur'
                        className='size-full object-cover'
                        fill
                        sizes='360px'
                        // sizes='(min-width: 300px) 350px, 350px'
                        // width={1200}
                        // height={630}
                    />
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
