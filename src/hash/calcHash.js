const { createHash } = await import('crypto');
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NAME_DIR = 'files';
const NAME_FILE = 'fileToCalculateHashFor.txt';
const pathToFile = path.join(__dirname, NAME_DIR, NAME_FILE);

export const calculateHash = async () => {
    try {
        const file = await readFile(pathToFile, { encoding: 'utf8' });
        const hash = createHash('sha256');
        const hexHashFile = hash.update(file).digest('hex');
        console.log(hexHashFile);
        return hexHashFile;
    } catch (error) {
        console.log(error.message);
    }
};

calculateHash();
