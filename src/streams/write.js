import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const relativePath = 'files/fileToWrite.txt';
const pathToFile = path.join(__dirname, relativePath);

export const write = async () => {
    const writableStream = createWriteStream(pathToFile);
    process.stdout.write('To complete the entry type \'stop\':\n');
    process.stdin.on('data', (chunk) => {
        const data = chunk.toString();
        if (data.trim() === 'stop') {
            process.stdin.destroy();
            return;
        }
        writableStream.write(data);
    });
};

write();
