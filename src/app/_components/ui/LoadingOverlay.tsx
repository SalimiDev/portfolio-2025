'use client';

import { useEffect, useState } from 'react';

import PathDrawing from './PathDrawing';
import { motion } from 'framer-motion';

type AnimationOptions = 'easeIn' | 'easeOut' | 'backInOut' | 'easeInOut' | 'linear';
type LoadingOverlayProps = {
    children: React.ReactNode;
    duration?: number;
    animation?: AnimationOptions;
    position?: number;
    delay?: number;
};

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
    children,
    duration = 1,
    animation = 'backInOut',
    position = 100,
    delay = 0
}) => {
    const [mounted, setMounted] = useState(false);
    const delayToMount: number = 3700;

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, delayToMount);

        return () => clearTimeout(timer);
    }, []);

    if (!mounted) {
        return (
            <div>
                <PathDrawing />
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: position }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, ease: animation, delay }}>
            {children}
        </motion.div>
    );
};

export default LoadingOverlay;
