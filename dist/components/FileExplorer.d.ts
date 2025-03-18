import React from "react";
import "../styles/global.css";
import { FileItem } from "../hooks/useFileManager";
interface FileExplorerProps {
    files: FileItem[];
}
declare const FileExplorer: React.FC<FileExplorerProps>;
export default FileExplorer;
