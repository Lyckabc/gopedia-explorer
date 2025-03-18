import { useState } from "react";
export const useDragAndDrop = () => {
    const [draggedItem, setDraggedItem] = useState(null);
    const handleDragStart = (id) => {
        setDraggedItem(id);
    };
    const handleDrop = (id) => {
        console.log(`Moved ${draggedItem} to ${id}`);
        setDraggedItem(null);
    };
    return { handleDragStart, handleDrop };
};
