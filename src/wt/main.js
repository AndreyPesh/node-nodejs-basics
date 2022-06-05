import { Worker, parentPort } from 'worker_threads';
import os from 'os';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, './worker.js');
const numberCores = os.cpus().length;
const OFFSET_FROM_INDEX = 10;

export const performCalculations = async () => {
    return new Promise((resolve, reject) => {
        try {
            const resultCalculations = [];
            for (let i = 0; i < numberCores; i++) {
                const worker = new Worker(pathToFile, { workerData: i + OFFSET_FROM_INDEX });
                worker.on('message', (data) => {
                    resultCalculations.splice(i, 0, data);
                    if (resultCalculations.length === numberCores) {
                        resolve(resultCalculations);
                    }
                });
                worker.postMessage({});
            }
        } catch {
            reject('Something went wrong!');
        }
    });
};

console.log(await performCalculations());
