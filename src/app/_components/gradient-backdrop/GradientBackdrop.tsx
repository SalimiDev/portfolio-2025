const GradientBackdrop: React.FC = () => {
    return (
        <>
            {/* Background Gradient */}
            <div
                className='absolute inset-0'
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 150%, rgba(32, 141, 229, 0.17), transparent)'
                }}
            />
            {/* Shine Effect */}
            <div
                className='absolute inset-[-8px] z-10 opacity-40 blur'
                style={{
                    maskImage: 'radial-gradient(circle at 50% 150%, white, transparent)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 150%, white, transparent)',
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
                }}
            />
            {/* Hover Background */}
            <div className='bg-zinc-950/15 group-hover:bg-black/75 absolute inset-px z-20 rounded-[23px] transition-colors duration-300' />
        </>
    );
};

export default GradientBackdrop;
