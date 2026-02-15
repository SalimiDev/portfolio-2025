import { memo } from 'react';

import Link from 'next/link';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

import { motion } from 'framer-motion';

const whileHover = {
    scale: 1.1,
    transition: { duration: 0.2 }
};
const whileTap = { scale: 0.8 };

interface SocialCardProps {
    config: Extract<GridCardConfig, { componentType: 'SocialCard' }>;
}

const SocialCard: React.FC<SocialCardProps> = memo(({ config }) => {
    const { platformIcon: PlatformIcon, platformUrl, platform } = config;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: 'backInOut', delay: 0.1 }}
            className='h-full transform-none opacity-100 blur-0'>
            <div className='h-full transform-none opacity-100 blur-0'>
                <div className='group relative aspect-square size-full overflow-hidden rounded-[24px] bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                    <GradientBackdrop />
                    {/* Content */}
                    <div className='relative h-full'>
                        <div className='relative z-20 flex size-full items-center justify-center opacity-65 transition-opacity hover:opacity-90'>
                            <Link
                                className='flex size-[55%] items-center justify-center rounded-3xl'
                                href={platformUrl}
                                target='_blank'
                                aria-label={`Visit My ${platform}`}
                                rel='noopener noreferrer'>
                                <div className='relative aspect-square size-auto transition-opacity'>
                                    <motion.div whileHover={whileHover} whileTap={whileTap}>
                                        <PlatformIcon width={96} height={96} stroke='none' />
                                    </motion.div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

export default SocialCard;
