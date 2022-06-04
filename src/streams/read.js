import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const RELATIVE_PATH_FILE = 'files/fileToRead.txt';
const pathToFile = path.join(__dirname, RELATIVE_PATH_FILE);

export const read = async () => {
    const readableStream = createReadStream(pathToFile);
    readableStream.pipe(process.stdout);
};

read();
