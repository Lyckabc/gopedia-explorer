export interface FileItem {
    id: string;
    name: string;
    size?: string;
    kind?: string;
    dateAdded?: string;
    isDirectory: boolean;
    children?: FileItem[];
}
declare const useFileManager: (initialFiles: FileItem[]) => {
    files: FileItem[];
    toggleFolder: (id: string) => void;
};
export default useFileManager;
