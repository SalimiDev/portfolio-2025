import { create } from 'zustand';

const useActiveMenuTab = create<{
    activeTab: NavigationTitles;
    setActiveTab: (newTab: NavigationTitles) => void;
}>((set) => ({
    activeTab: 'all', //default
    setActiveTab: (newTab: NavigationTitles) => set(() => ({ activeTab: newTab }))
}));

export default useActiveMenuTab;
