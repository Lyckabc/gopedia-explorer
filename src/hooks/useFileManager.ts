import { useState } from "react";

export interface FileItem {
  id: string;
  name: string;
  size?: string;
  kind?: string;
  dateAdded?: string;
  isDirectory: boolean;
  children?: FileItem[];
}

const useFileManager = (initialFiles: FileItem[]) => {
  const [files, setFiles] = useState<FileItem[]>(initialFiles);

  const toggleFolder = (id: string) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === id ? { ...file, isDirectory: !file.isDirectory } : file
      )
    );
  };

  return { files, toggleFolder };
};

export default useFileManager;
