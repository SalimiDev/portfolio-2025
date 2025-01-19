import Image from 'next/image';
import Link from 'next/link';

import { GridCardConfig } from '@/app/(grid-container-layout)/grid-card-configs.type';
import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

import { IconExternalLink } from '../../icons/icons';

interface ResumeCardProps {
    config: Extract<GridCardConfig, { componentType: 'ProjectCard' }>;
}

const ProjectCard: React.FC<ResumeCardProps> = ({ config }) => {
    const { projectUrl, projectImage, projectName, companyName, projectTech, companyLogo: CompanyLogo } = config;

    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='relative size-full overflow-hidden rounded-3xl bg-white/60 p-px shadow-2xl dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='relative h-full overflow-hidden'>
                    <div className='relative flex h-full flex-col justify-center gap-6 overflow-hidden p-4 sm:px-8 sm:py-6'>
                        <div className='relative flex size-full flex-col items-stretch justify-between'>
                            <Image
                                className='transparent absolute inset-0 z-50 size-full rounded-lg shadow-2xl'
                                src={projectImage}
                                alt={projectName}
                                loading='lazy'
                                placeholder='blur'
                                fill
                                data-nimg='fill'
                                sizes='(min-width: 640px) 559px, 591px'
                                // decoding='async'
                                // fetchPriority='high'
                                // sizes='(max-width: 640px) 246px, (max-width: 1280px) 214px, (max-width: 1440px) 214px, (max-width: 1920px) 246px, 559px'
                            />
                        </div>

                        <div className='flex flex-col items-start gap-1'>
                            <h2 className='flex flex-wrap items-center gap-2 text-xs font-medium uppercase opacity-80'>
                                <span>Project at</span>
                                <span className='flex gap-1'>
                                    {CompanyLogo && <CompanyLogo width={16} height={12} stroke='none' />}

                                    {companyName}
                                </span>
                            </h2>
                            <div className='flex w-full items-center gap-2'>
                                <h1 className='text-black text-2xl font-medium uppercase opacity-90 dark:text-white'>
                                    {projectName}
                                </h1>
                                {projectUrl && (
                                    <Link
                                        href={projectUrl}
                                        target='_blank'
                                        aria-label='View Project'
                                        rel='noreferrer noopener'
                                        className='relative z-20 flex size-12 items-center'>
                                        <div className='opacity-60 transition-opacity hover:opacity-100'>
                                            <IconExternalLink width={25} height={25} stroke='none' />
                                        </div>
                                    </Link>
                                )}
                            </div>
                            <div className='mt-1 flex flex-wrap gap-2'>
                                {projectTech &&
                                    projectTech.map((tech, _i) => (
                                        <div
                                            key={`${_i}-${tech}`}
                                            className='dark:hover:bg-zinc-950/80 inline-flex items-center rounded-full border border-neutral-focus px-2 py-0.5 text-xs font-semibold text-neutral-focus transition-colors dark:border-base-25 dark:text-base-25'>
                                            {tech}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
