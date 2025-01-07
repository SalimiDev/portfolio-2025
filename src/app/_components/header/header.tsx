'use client';

import LoadingOverlay from '../ui/LoadingOverlay';
import { TopNavigation } from './top-navigation';

export const Header: React.FC = () => {
    return (
        <header className='grid justify-center py-12 sm:py-16 md:pb-20'>
            <LoadingOverlay animation='backInOut' duration={1.7} position={350}>
                <TopNavigation />
            </LoadingOverlay>
        </header>
    );
};
