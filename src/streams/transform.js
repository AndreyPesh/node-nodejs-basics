import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

export const transform = async () => {
    try {
        const transformStream = new Transform({
            transform(chunk, enc, cb) {
                const chunkStringified = chunk.toString().trim();
                const reversedChunk = chunkStringified.split('').reverse().join('');
                this.push(reversedChunk + '\n');
                cb();
            }
        })
        await pipeline(process.stdin, transformStream, process.stdout);
    } catch(error) {
        console.log(error.message);
    }
    
};

transform();