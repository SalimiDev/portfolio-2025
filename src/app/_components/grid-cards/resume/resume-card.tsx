import { memo } from 'react';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

interface ResumeCardProps {
    config: Extract<GridCardConfig, { componentType: 'ResumeCard' }>;
}

const ResumeCard: React.FC<ResumeCardProps> = memo(({ config }) => {
    const {
        resumeDownloadIcon: DownloadIcon,
        resumePreviewIcon: PreviewIcon,
        resumeDownloadUrl,
        resumePreviewUrl,
        CVDate
    } = config;

    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='group relative size-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                <GradientBackdrop />
                <div className='relative h-full'>
                    <div className='relative flex h-full flex-col justify-center gap-6 px-8 py-6'>
                        <div className='flex w-full items-center justify-between'>
                            <div className='flex flex-col items-start gap-1'>
                                <p className='text-xs font-medium uppercase opacity-50'>{CVDate}</p>
                                <h2 className='text-black text-2xl font-medium uppercase opacity-90 dark:text-white'>
                                    Resume
                                </h2>
                            </div>
                            <div className='flex items-center gap-2 lg:gap-6'>
                                <a
                                    href={resumeDownloadUrl}
                                    download
                                    className='relative z-20 cursor-pointer'
                                    aria-label='Download My Resume'>
                                    <div className='size-10 opacity-60 transition hover:scale-110 hover:opacity-100 active:scale-95'>
                                        <DownloadIcon width={36} height={36} stroke='none' />
                                    </div>
                                </a>
                                <a
                                    href={resumePreviewUrl}
                                    type='application/pdf'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='relative z-20 cursor-pointer'
                                    aria-label='Preview My Resume'>
                                    <div className='size-10 opacity-60 transition hover:scale-110 hover:opacity-100 active:scale-95'>
                                        <PreviewIcon width={36} height={36} stroke='none' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ResumeCard;
