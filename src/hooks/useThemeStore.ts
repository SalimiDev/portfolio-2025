import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeStore {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: 'dark', // Default theme
    toggleTheme: () =>
        set((state) => ({
            theme: state.theme === 'dark' ? 'light' : 'dark'
        })),
    setTheme: (theme: Theme) => set({ theme })
}));
