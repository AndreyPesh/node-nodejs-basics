import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NAME_DIR = 'files';
const pathToDir = path.join(__dirname, NAME_DIR);
const ERROR_MESSAGE = 'FS operation failed';

const readDir = async (pathToDir) => {
    try {
        const listFiles = await fs.readdir(pathToDir);
        return listFiles;
    } catch {
        return false;
    }
}

export const list = async () => {
    try {
        const folderContent = await readDir(pathToDir);
        if(!folderContent) {
            throw new Error(ERROR_MESSAGE);
        }
        folderContent.forEach(filename => {
            console.log(filename);
        }) 
    } catch (error) {
        console.log(error.message);
    }
};

list();