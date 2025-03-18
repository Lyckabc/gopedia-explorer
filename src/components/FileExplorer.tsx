import React, { useState } from "react";
import { FileItem } from "../hooks/useFileManager";
import { useDragAndDrop } from "../hooks/useDragAndDrop";

interface FileExplorerProps {
  files: FileItem[];
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files }) => {
  const [viewType, setViewType] = useState<"list" | "grid">("list");
  const { handleDragStart, handleDrop } = useDragAndDrop();

  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-100">
      <div className="flex justify-between mb-2">
        <button onClick={() => setViewType("list")} className="px-2 py-1 bg-blue-500 text-white rounded">
          List View
        </button>
        <button onClick={() => setViewType("grid")} className="px-2 py-1 bg-green-500 text-white rounded">
          Grid View
        </button>
      </div>

      {viewType === "list" ? (
        <div className="w-full border border-gray-300 rounded-lg">
          <div className="grid grid-cols-4 bg-gray-200 p-2 font-bold">
            <div>Name</div>
            <div>Size</div>
            <div>Kind</div>
            <div>Date Added</div>
          </div>
          {files.map((file) => (
            <div
              key={file.id}
              className="grid grid-cols-4 p-2 border-t border-gray-300 cursor-pointer hover:bg-gray-200"
              draggable
              onDragStart={() => handleDragStart(file.id)}
              onDrop={() => handleDrop(file.id)}
            >
              <div>{file.isDirectory ? "📁 " : "📄 "}{file.name}</div>
              <div>{file.size || "-"}</div>
              <div>{file.kind || "-"}</div>
              <div>{file.dateAdded || "-"}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {files.map((file) => (
            <div
              key={file.id}
              className="p-2 border rounded-lg shadow-sm text-center bg-white cursor-pointer hover:bg-gray-200"
              draggable
              onDragStart={() => handleDragStart(file.id)}
              onDrop={() => handleDrop(file.id)}
            >
              <div className="text-4xl">{file.isDirectory ? "📁" : "📄"}</div>
              <div>{file.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileExplorer;
