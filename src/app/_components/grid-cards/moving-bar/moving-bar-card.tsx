import GradientBackdrop from '@/app/_components/gradient-backdrop/GradientBackdrop';

const MovingBar: React.FC = () => {
    const repeatCount = 50;

    return (
        <div className='h-full transform-none opacity-100 blur-0'>
            <div className='relative overflow-hidden rounded-3xl bg-white/60 p-px dark:bg-white/10'>
                <GradientBackdrop />
                {/* Content */}
                <div className='mask-gradient-horizontal relative mx-auto flex h-7 w-full items-center justify-center overflow-hidden px-4 py-2 lg:h-[68px]'>
                    <div className='absolute flex w-full animate-marquee gap-4'>
                        {Array.from({ length: repeatCount }).map((_, index) => (
                            <span key={index} className='flex gap-1'>
                                <h3 className='text-nowrap font-bold'>Mehdi Salimi</h3>
                                <span className=''>&copy;2025</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovingBar;
