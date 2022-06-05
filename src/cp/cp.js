import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToModule = path.join(__dirname, 'files', 'script.js');
const options = {
    stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
};

export const spawnChildProcess = async (args) => {
    
    const child = fork(pathToModule, args, options);
    child.send({});
    child.on('error', message => {
        console.log(`Error in ${child.pid} child process:`, message);
    });
    child.on('exit', message => {
        console.log(`Exit from ${child.pid} child process:`, message);
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    process.stdin.pipe(child.stdin);
};

spawnChildProcess([1, 2, 3, 4, 5]);
