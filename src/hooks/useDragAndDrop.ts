import { useState } from "react";

export const useDragAndDrop = () => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (id: string) => {
    setDraggedItem(id);
  };

  const handleDrop = (id: string) => {
    console.log(`Moved ${draggedItem} to ${id}`);
    setDraggedItem(null);
  };

  return { handleDragStart, handleDrop };
};
