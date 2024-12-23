'use client';

import Image from 'next/image';

import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

import moon from './moon.svg';
import sun from './sun.svg';

const ThemeToggleCard: React.FC = () => {
    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative h-full'>
                    <div className='relative flex h-full flex-col justify-center p-1'>
                        <div className='flex h-full items-center justify-around gap-1'>
                            <button className='relative z-10 flex h-full w-2/4 items-center justify-center rounded-[24px]'>
                                <div className='size-10 opacity-50 transition-opacity hover:opacity-100'>
                                    <Image alt='asc' src={sun} width={45} height={45} />
                                </div>
                            </button>
                            <button className='shadow-darkmode before:from-from before:to-to relative z-10 flex h-full w-2/4 items-center justify-center rounded-[24px] bg-[#04040d29] before:absolute before:-z-10 before:size-full before:rounded-[20px] before:bg-gradient-to-br before:from-0% before:to-100% before:opacity-40 before:transition-all before:duration-300 before:ease-in-out'>
                                <div className='size-10 opacity-50 transition-opacity hover:opacity-100'>
                                    <Image alt='asc' src={moon} width={36} height={36} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeToggleCard;
