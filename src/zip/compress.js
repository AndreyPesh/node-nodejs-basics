import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, 'files/fileToCompress.txt');
const pathToCompressFile = path.join(__dirname, 'files/archive.gz');

export const compress = async () => {
    try {
        const readableStream = createReadStream(pathToFile);
        const writeableStream = createWriteStream(pathToCompressFile);
        await pipeline(readableStream, zlib.createGzip(), writeableStream);
    } catch(error) {
        console.log(error.message);
    }
};

compress();
