'use client';

import Image from 'next/image';

import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

const LocationCard: React.FC = () => {
    return (
        <div
            style={{
                opacity: 1,
                filter: 'blur(0px)',
                height: '100%',
                transform: 'none'
            }}>
            <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative h-full'>
                    <Image src={'/images/location.png'} alt='location' layout='fill' objectFit='cover' />
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
