import Link from 'next/link';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

interface SocialCardProps {
    config: Extract<GridCardConfig, { componentType: 'SocialCard' }>;
}

const SocialCard: React.FC<SocialCardProps> = ({ config }) => {
    const { platformIcon: PlatformIcon, platformUrl, platform } = config;

    return (
        <div
            style={{
                opacity: 1,
                filter: 'blur(0px)',
                height: '100%',
                transform: 'none'
            }}>
            <div className='group relative aspect-square size-full overflow-hidden rounded-[24px] bg-white/60 p-px dark:bg-white/10'>
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
                                <PlatformIcon width={96} height={96} stroke='none' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialCard;
