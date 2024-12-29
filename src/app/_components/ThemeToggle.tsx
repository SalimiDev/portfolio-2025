// src/components/ThemeToggle.tsx
import React from 'react';

import { useThemeStore } from '@/store/useThemeStore';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <button
            onClick={toggleTheme}
            className='bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded px-4 py-2'>
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    );
};
