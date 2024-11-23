'use client';

import React, { useState } from 'react';

import { draggableCardConfigs } from '../draggable-card-configs';
import DraggableItem from './draggable-card';
import { Responsive, ResponsiveProps, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DraggableGridProps {
    layoutProps?: ResponsiveProps;
}

interface TabLayout {
    [key: string]: {
        lg: Array<{
            x: number;
            y: number;
            w: number;
            h: number;
            i: string;
        }>;
    };
}

const DraggableGrid: React.FC<DraggableGridProps> = ({ layoutProps }) => {
    const [activeTab, setActiveTab] = useState('all');

    const generateAllLayout = () =>
        draggableCardConfigs.map((item, index) => ({
            x: item.layout?.x || 4,
            y: item.layout?.y || 2,
            w: item.layout?.w || 3,
            h: item.layout?.h || 4,
            i: String(item.id),
            color: item.color
        }));

    const generateAboutLayout = () =>
        draggableCardConfigs.map((item, index) => ({
            x: index % 2,
            y: Math.floor(index / 2),
            w: 6,
            h: 4,
            i: String(item.id)
        }));

    const generateWorksLayout = () =>
        draggableCardConfigs.map((item, index) => ({
            x: 0,
            y: index,
            w: 12,
            h: 4,
            i: String(item.id)
        }));

    const [layout, setlayout] = useState(generateAllLayout());

    const tabLayouts: TabLayout = {
        all: { lg: generateAllLayout() },
        about: { lg: generateAboutLayout() },
        works: { lg: generateWorksLayout() }
    };

    return (
        <div className='space-y-4'>
            {/* Navigation Tabs */}
            <nav className='border-gray-200 flex space-x-4 border-b pb-2'>
                {['all', 'about', 'works'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`rounded-lg px-4 py-2 transition-colors ${
                            activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
                        }`}>
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </nav>

            {/* Grid Layout */}
            <div className='relative'>
                <ResponsiveGridLayout
                    className='layout'
                    layouts={tabLayouts[activeTab]}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    rowHeight={30}
                    {...layoutProps}>
                    {draggableCardConfigs.map((item) => (
                        <div key={item.id} style={{ backgroundColor: item.color }}>
                            <DraggableItem item={item} />
                        </div>
                    ))}
                </ResponsiveGridLayout>
            </div>
        </div>
    );
};

export default DraggableGrid;
