import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NAME_DIR = 'files';
const NAME_FILE = 'wrongFilename.txt';
const RENAME_FILE = 'properFilename.md';
const pathFile = path.join(__dirname, NAME_DIR, NAME_FILE);
const pathRenameFile = path.join(__dirname, NAME_DIR, RENAME_FILE);
const ERROR_MESSAGE = 'FS operation failed';

const isExistFile = async (pathToFile) => {
    try {
        await fs.access(pathToFile);
        return false;
    } catch {
        return true;
    }
}

export const rename = async () => {
    try {
        const isFileNotExist = await isExistFile(pathFile);
        const isRenameFileExist = await isExistFile(pathRenameFile);
        if (isFileNotExist | !isRenameFileExist) {
            throw new Error(ERROR_MESSAGE);
        }
        await fs.rename(pathFile, pathRenameFile)
    } catch(error) {
        console.log(error.message);
    }
};

rename();
