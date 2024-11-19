'use client';

import React, { useState } from 'react';

import {
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';

import { SortableItem } from './_components/sortable-item/SortableItem';

export default function Home() {
    const [items, setItems] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
    ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    return (
        <section className='flex h-screen flex-wrap justify-center'>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                modifiers={[restrictToParentElement]}>
                <SortableContext
                    items={items}
                    // strategy={verticalListSortingStrategy}
                >
                    {items.map((id) => (
                        <SortableItem key={id} id={id} name={id.toString()} />
                    ))}
                </SortableContext>
            </DndContext>
        </section>
    );

    function handleDragEnd(event: DragEndEvent): void {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setItems((currentItems) => {
                const oldIndex = currentItems.indexOf(Number(active.id));
                const newIndex = currentItems.indexOf(Number(over.id));

                return arrayMove(currentItems, oldIndex, newIndex);
            });
        }
    }
}
