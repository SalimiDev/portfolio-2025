import React from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableItem(props) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: props.id,
        transition: {
            duration: 1200, // milliseconds
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
        }
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transform ? 'transform 0.3s ease' : undefined
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='m-2 h-32 w-72 bg-primary-focus'>
            <h2>{`Item-${props.id}`}</h2>
        </div>
    );
}
