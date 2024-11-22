'use client';

import React from 'react';

import { draggableCardConfigs } from '../draggable-card-configs';
import DraggableItem from './draggable-card';
import { Responsive, ResponsiveProps, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DraggableGridProps {
    layoutProps?: ResponsiveProps;
}

const DraggableGrid: React.FC<DraggableGridProps> = ({ layoutProps }) => {
    const generateLayout = () =>
        draggableCardConfigs.map((item, index) => ({
            x: index % 4,
            y: Math.floor(index / 4),
            w: 3,
            h: 4,
            i: String(item.id)
        }));

    return (
        <div className='relative'>
            <ResponsiveGridLayout
                className='layout'
                layouts={{ lg: generateLayout() }}
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
    );
};

export default DraggableGrid;
