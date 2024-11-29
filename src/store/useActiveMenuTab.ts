import { create } from 'zustand';

// تعریف نوع NavigationTitles
// type NavigationTitles = 'all' | 'about' | 'work';

// تعریف Zustand store
const useActiveMenuTab = create<{
    activeTab: NavigationTitles;
    setActiveTab: (newTab: NavigationTitles) => void;
}>((set) => ({
    activeTab: 'all', // مقدار پیش‌فرض
    setActiveTab: (newTab: NavigationTitles) => set(() => ({ activeTab: newTab }))
}));

export default useActiveMenuTab;
