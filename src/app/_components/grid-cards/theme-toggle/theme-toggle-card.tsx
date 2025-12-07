'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

import { IconMoon, IconSun } from '../../icons/icons';
import { motion } from 'framer-motion';

const ThemeToggleCard: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

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

    const selectedButtonStyles = `
    shadow-darkmode bg-[#04040d29] 
    before:absolute before:-z-10 before:size-full 
    before:rounded-[20px] before:bg-gradient-to-br 
    before:from-0% before:to-100% before:opacity-40 
    before:transition-all before:duration-300 before:ease-in-out
`;

    const whileHover = {
        scale: 1.1,
        transition: { duration: 0.2 }
    };
    const whileTap = { scale: 0.8 };

    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative h-full'>
                    <div className='relative flex h-full flex-col justify-center p-1'>
                        <div className='flex h-full items-center justify-around gap-1'>
                            {/* Dark Mode Button */}
                            <motion.button
                                onClick={() => setTheme('dark')}
                                className={`relative z-20 flex h-full w-2/4 items-center justify-center rounded-[24px] ${isDark ? selectedButtonStyles : ''}`}
                                whileHover={whileHover}
                                whileTap={whileTap}
                                aria-label='darkmode'>
                                <div className='size-10 opacity-60 transition-opacity hover:opacity-100'>
                                    <IconMoon width={36} height={36} stroke='none' strokeWidth={0.5} />
                                </div>
                            </motion.button>

                            {/* Light Mode Button */}
                            <motion.button
                                onClick={() => setTheme('light')}
                                className={`relative z-20 flex h-full w-2/4 items-center justify-center rounded-[24px] ${!isDark ? selectedButtonStyles : ''}`}
                                whileHover={whileHover}
                                whileTap={whileTap}
                                aria-label='lightmode'>
                                <div className='size-10 opacity-60 transition-opacity hover:opacity-100'>
                                    <IconSun width={36} height={36} stroke='none' strokeWidth={0.5} />
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeToggleCard;
