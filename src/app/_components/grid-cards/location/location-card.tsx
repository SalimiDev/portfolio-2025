import Image from 'next/image';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

interface LocationCardProps {
    config: Extract<GridCardConfig, { componentType: 'LocationCard' }>;
}

const LocationCard: React.FC<LocationCardProps> = ({ config }) => {
    const { locationImage } = config;

    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative h-full'>
                    <Image
                        src={locationImage}
                        alt='location'
                        priority={true}
                        placeholder='blur'
                        className='size-full object-cover'
                        // width={1200}
                        // height={630}
                        // loading='lazy'
                    />
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
