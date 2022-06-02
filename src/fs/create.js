import { access, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NAME_DIR = 'files';
const NAME_FILE = 'fresh.txt';
const pathFile = path.join(__dirname, NAME_DIR, NAME_FILE);
const CONTENT_FILE = 'I am fresh and young';

export const create = async () => {
    try {
        const isExistsFile = await isCheckExistFile(pathFile);
        if (isExistsFile) {
            throw new Error('FS operation failed');
        }
        await writeFile(pathFile, CONTENT_FILE);
    } catch(err) {
        console.log(err.message);
    }
    
};

const isCheckExistFile = async (pathFile) => {
    try {
        await access(pathFile);
        return true;
    } catch {
        return false;
    }
}

create();