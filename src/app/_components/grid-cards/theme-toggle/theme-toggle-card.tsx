import { useEffect, useState } from 'react';

import Image from 'next/image';

import { useTheme } from 'next-themes';

import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

import { IconMoon, IconSun } from '../../icons/icons';

const ThemeToggleCard: React.FC = () => {
    const { setTheme, resolvedTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted)
        return (
            <Image
                src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
                width={36}
                height={36}
                sizes='36x36'
                priority={false}
                alt='Loading Light/Dark Toggle'
                title='Loading Light/Dark Toggle'
            />
        );

    const selectedButtonStyles = `
    shadow-darkmode bg-[#04040d29] 
    before:absolute before:-z-10 before:size-full 
    before:rounded-[20px] before:bg-gradient-to-br 
    before:from-0% before:to-100% before:opacity-40 
    before:transition-all before:duration-300 before:ease-in-out
`;

    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative h-full'>
                    <div className='relative flex h-full flex-col justify-center p-1'>
                        <div className='flex h-full items-center justify-around gap-1'>
                            <button
                                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                                className={`${resolvedTheme === 'dark' ? selectedButtonStyles : ''} relative z-20 flex h-full w-2/4 items-center justify-center rounded-[24px]`}
                                aria-label='darkmode'>
                                <div className='size-10 opacity-60 transition-opacity hover:opacity-100'>
                                    <IconMoon width={36} height={36} stroke='none' strokeWidth={0.5} />
                                </div>
                            </button>
                            <button
                                onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
                                className={`${resolvedTheme === 'light' ? selectedButtonStyles : ''} relative z-20 flex h-full w-2/4 items-center justify-center rounded-[24px]`}
                                aria-label='lightmode'>
                                <div className='size-10 opacity-60 transition-opacity hover:opacity-100'>
                                    <IconSun width={36} height={36} stroke='none' strokeWidth={0.5} />
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
