import { create } from 'zustand';

import type { NavigationTitle } from '@/types/navigation-menu-item';

const useActiveMenuTab = create<{
    activeTab: NavigationTitle;
    setActiveTab: (newTab: NavigationTitle) => void;
}>((set) => ({
    activeTab: 'All', //default
    setActiveTab: (newTab: NavigationTitle) => set({ activeTab: newTab })
}));

export default useActiveMenuTab;
