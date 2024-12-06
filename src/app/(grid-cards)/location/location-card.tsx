// 'use client';
import Image from 'next/image';

import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

const LocationCard: React.FC = () => {
    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='relative overflow-hidden rounded-3xl bg-white/60 p-px dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative h-64 w-full overflow-hidden'>
                    <Image src={'/images/location.png'} alt='location' layout='fill' objectFit='cover' />
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
