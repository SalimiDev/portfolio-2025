import { create } from 'zustand';

import type { NavigationTitle } from './navigation.types';

const useActiveMenuTab = create<{
    activeTab: NavigationTitle;
    setActiveTab: (newTab: NavigationTitle) => void;
}>((set) => ({
    activeTab: 'All', //default
    setActiveTab: (newTab: NavigationTitle) => set({ activeTab: newTab })
}));

export default useActiveMenuTab;
