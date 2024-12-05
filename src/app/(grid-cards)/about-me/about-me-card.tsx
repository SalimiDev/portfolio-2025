'use client';

import Image from 'next/image';

const AboutMeCard: React.FC = () => {
    return (
        <section className='group relative h-64 w-full overflow-hidden rounded-[24px] bg-white/60 p-px dark:bg-white/10'>
            <div
                className='absolute inset-0'
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 150%, rgba(32, 141, 229, 0.17), transparent)'
                }}></div>

            <div
                className='shine absolute -inset-[8px] z-10 opacity-40 blur-[8px]'
                style={{
                    maskImage: 'radial-gradient(circle at 50% 150%, white, transparent)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 150%, white, transparent)', // برای سازگاری با مرورگرهای مبتنی بر Webkit
                    backgroundImage: `
                conic-gradient(
                    from -45deg at 50% 150%, 
                    transparent 0deg, 
                    rgb(16, 7, 30) 15deg, 
                    transparent 30deg, 
                    rgb(16, 7, 30) 45deg, 
                    transparent 60deg, 
                    rgb(16, 7, 30) 75deg, 
                    transparent 90deg
                )
            `
                }}></div>

            <div className='bg-zinc-950/15 bg-zinc-950/70 group-hover:bg-black/75 absolute inset-px z-[2] rounded-[23px] transition-colors duration-300'></div>

            <canvas className='absolute inset-0 z-[2] size-full' width={347} height={559}></canvas>
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
