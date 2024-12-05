import Image from 'next/image';

import { TopNavigation } from './top-navigation';

export const Header: React.FC = () => {
    return (
        <header className='grid justify-center py-12 sm:py-16 md:pb-20'>
            {/* <div className='container flex items-center justify-between'> */}
            <TopNavigation />
            {/* </div> */}
        </header>
    );
};
