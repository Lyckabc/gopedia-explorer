import { useState } from "react";
const useFileManager = (initialFiles) => {
    const [files, setFiles] = useState(initialFiles);
    const toggleFolder = (id) => {
        setFiles((prevFiles) => prevFiles.map((file) => file.id === id ? Object.assign(Object.assign({}, file), { isDirectory: !file.isDirectory }) : file));
    };
    return { files, toggleFolder };
};
export default useFileManager;
