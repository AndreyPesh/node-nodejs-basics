import { workerData, parentPort } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

parentPort.on('message', () => {
    sendResult();
});

export const sendResult = () => {
    try {
        const result = nthFibonacci(workerData);
        // if(Math.random() > 0.5) {
        //     throw new Error('Error worker');
        // }
        parentPort.postMessage({status: 'resolved', data: result});
    } catch {
        parentPort.postMessage({status: 'error', data: null});
    }
    
};