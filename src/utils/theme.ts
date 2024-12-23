export const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const saveThemeToStorage = (theme: 'light' | 'dark') => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
    }
};

export const loadThemeFromStorage = (): 'light' | 'dark' | null => {
    if (typeof window === 'undefined') return null;

    return localStorage.getItem('theme') as 'light' | 'dark' | null;
};
