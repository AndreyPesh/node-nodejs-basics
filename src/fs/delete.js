import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NAME_DIR = 'files';
const NAME_FILE = 'fileToRemove.txt';
const pathToFile = path.join(__dirname, NAME_DIR, NAME_FILE);
const ERROR_MESSAGE = 'FS operation failed';

const isExistFile = async (pathToFile) => {
    try {
        await fs.access(pathToFile);
        return true;
    } catch {
        return false;
    }
}

export const remove = async () => {
    try {
        const isFileExist = await isExistFile(pathToFile);
        if (!isFileExist) {
            throw new Error(ERROR_MESSAGE);
        }
        await fs.unlink(pathToFile);
    } catch(error) {
        console.log(error.message);
    }
};

remove();
