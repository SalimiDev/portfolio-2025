'use client';

import Image from 'next/image';

import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

const AboutMeCard: React.FC = (props) => {
    console.log(props);

    return (
        <section className='group relative h-64 w-full overflow-hidden rounded-[24px] bg-white/60 p-px dark:bg-white/10'>
            <GradientBackdrop />
            <div className='static flex flex-col items-center gap-6 px-6 py-5 sm:items-start sm:px-8 sm:py-6'>
                <div className='flex flex-col items-center gap-2 sm:flex-row sm:justify-start sm:gap-6'>
                    <div className='shadow-memoji relative z-0 size-16 min-w-16 overflow-hidden rounded-full p-[2px] sm:size-24 sm:min-w-24'>
                        <Image
                            src='/images/user_avatar.jpg'
                            alt='avatar'
                            width={100}
                            height={36}
                            className='rounded-full'
                        />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-slate-900 text-2xl font-medium leading-tight dark:text-white sm:text-4xl'>
                            Mehdi Salimi
                        </h1>
                    </div>
                </div>
                <p className='text-slate-900 text-xs leading-6 tracking-wide dark:text-white sm:text-sm'>
                    I am passionate about building beautiful and functional user interfaces.
                    <br />
                    Currently work at Paya on the BigData team.
                </p>
            </div>
        </section>
    );
};

export default AboutMeCard;
