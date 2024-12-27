'use client';

import Image from 'next/image';
import Link from 'next/link';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

interface SocialCardProps {
    config: Extract<GridCardConfig, { componentType: 'SocialCard' }>;
}

const SocialCard: React.FC<SocialCardProps> = ({ config }) => {
    const { platform, platformIcon, link } = config;

    return (
        <div
            style={{
                opacity: 1,
                filter: 'blur(0px)',
                height: '100%',
                transform: 'none'
            }}>
            <div className='group relative aspect-square size-full overflow-hidden rounded-[24px] bg-white/60 p-px dark:bg-white/10'>
                <div
                    className='absolute inset-0'
                    style={{
                        backgroundImage: 'radial-gradient(circle at 50% 150%, rgba(32, 141, 229, 0.17), transparent)'
                    }}></div>
                <div
                    className='shine absolute inset-[-8px] z-10 opacity-40 blur'
                    style={{
                        maskImage: 'radial-gradient(circle at 50% 150%, white, transparent)',
                        WebkitMaskImage: 'radial-gradient(circle at 50% 150%, white, transparent)',
                        backgroundImage:
                            'conic-gradient(from -45deg at 50% 150%, transparent 0deg, rgb(16, 7, 30) 15deg, transparent 30deg, rgb(16, 7, 30) 45deg, transparent 60deg, rgb(16, 7, 30) 75deg, transparent 90deg)'
                    }}></div>
                <div className='bg-zinc-950/15 bg-zinc-950/70 group-hover:bg-black/75 absolute inset-px z-[2] rounded-[23px] transition-colors duration-300'></div>
                <canvas className='absolute inset-0 z-[2] size-full' width='285' height='207'></canvas>
                <div className='relative h-full'>
                    <div className='relative z-10 flex size-full items-center justify-center opacity-80 transition-opacity hover:opacity-100'>
                        <Link
                            className='flex size-[55%] items-center justify-center rounded-3xl'
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <div className='relative aspect-square h-full w-auto'>
                                <Image
                                    src={platformIcon}
                                    alt={platform}
                                    loading='lazy'
                                    className='absolute inset-0 size-full'
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialCard;
