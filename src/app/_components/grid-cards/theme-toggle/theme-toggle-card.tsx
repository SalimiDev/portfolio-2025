'use client';

import { memo, useCallback, useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

import { IconMoon, IconSun } from '../../icons/icons';
const selectedButtonStyles =
    'shadow-darkmode bg-[#04040d29] before:absolute before:-z-10 before:size-full before:rounded-[20px] ' +
    'before:bg-gradient-to-br before:from-0% before:to-100% before:opacity-40 before:transition-all ' +
    'before:duration-300 before:ease-in-out';

const ThemeToggleCard: React.FC = memo(() => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSetDark = useCallback(() => setTheme('dark'), [setTheme]);
    const handleSetLight = useCallback(() => setTheme('light'), [setTheme]);

    if (!mounted) {
        return (
            <div className='h-full transform-none opacity-100 blur-0'>
                <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                    <GradientBackdrop />
                </div>
            </div>
        );
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative h-full'>
                    <div className='relative flex h-full flex-col justify-center p-1'>
                        <div className='flex h-full items-center justify-around gap-1'>
                            {/* Dark Mode Button */}
                            <button
                                onClick={handleSetDark}
                                type='button'
                                className={`relative z-20 flex h-full w-2/4 items-center justify-center rounded-[24px] transition hover:scale-[1.03] active:scale-95 ${isDark ? selectedButtonStyles : ''}`}
                                aria-label='darkmode'>
                                <div className='size-10 opacity-60 transition-opacity hover:opacity-100'>
                                    <IconMoon width={36} height={36} stroke='none' strokeWidth={0.5} />
                                </div>
                            </button>

                            {/* Light Mode Button */}
                            <button
                                onClick={handleSetLight}
                                type='button'
                                className={`relative z-20 flex h-full w-2/4 items-center justify-center rounded-[24px] transition hover:scale-[1.03] active:scale-95 ${!isDark ? selectedButtonStyles : ''}`}
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
});

export default ThemeToggleCard;
