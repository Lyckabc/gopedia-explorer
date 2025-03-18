import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../styles/global.css";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
const FileExplorer = ({ files }) => {
    const [viewType, setViewType] = useState("list");
    const { handleDragStart, handleDrop } = useDragAndDrop();
    return (_jsxs("div", { className: "p-4 border rounded-lg shadow-md bg-gray-100", children: [_jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("button", { onClick: () => setViewType("list"), className: "px-2 py-1 bg-blue-500 text-white rounded", children: "List View" }), _jsx("button", { onClick: () => setViewType("grid"), className: "px-2 py-1 bg-green-500 text-white rounded", children: "Grid View" })] }), viewType === "list" ? (_jsxs("div", { className: "w-full border border-gray-300 rounded-lg", children: [_jsxs("div", { className: "grid grid-cols-4 bg-gray-200 p-2 font-bold", children: [_jsx("div", { children: "Name" }), _jsx("div", { children: "Size" }), _jsx("div", { children: "Kind" }), _jsx("div", { children: "Date Added" })] }), files.map((file) => (_jsxs("div", { className: "grid grid-cols-4 p-2 border-t border-gray-300 cursor-pointer hover:bg-gray-200", draggable: true, onDragStart: () => handleDragStart(file.id), onDrop: () => handleDrop(file.id), children: [_jsxs("div", { children: [file.isDirectory ? "📁 " : "📄 ", file.name] }), _jsx("div", { children: file.size || "-" }), _jsx("div", { children: file.kind || "-" }), _jsx("div", { children: file.dateAdded || "-" })] }, file.id)))] })) : (_jsx("div", { className: "grid grid-cols-4 gap-4", children: files.map((file) => (_jsxs("div", { className: "p-2 border rounded-lg shadow-sm text-center bg-white cursor-pointer hover:bg-gray-200", draggable: true, onDragStart: () => handleDragStart(file.id), onDrop: () => handleDrop(file.id), children: [_jsx("div", { className: "text-4xl", children: file.isDirectory ? "📁" : "📄" }), _jsx("div", { children: file.name })] }, file.id))) }))] }));
};
export default FileExplorer;
EOL;
