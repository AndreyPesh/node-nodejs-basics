import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NAME_DIR = 'files';
const NAME_FILE = 'fileToRead.txt';
const pathToFile = path.join(__dirname, NAME_DIR, NAME_FILE);
const ERROR_MESSAGE = 'FS operation failed';

const readFile = async (pathToFile) => {
    try {
        const fileContent = await fs.readFile(pathToFile,  { encoding: 'utf8' });
        return fileContent;
    } catch {
        return false;
    }
}

export const read = async () => {
    try {
        const fileContent = await readFile(pathToFile);
        if(!fileContent) {
            throw new Error(ERROR_MESSAGE);
        }
        console.log(fileContent);
    } catch(error) {
        console.log(error.message);
    }
};

read();
