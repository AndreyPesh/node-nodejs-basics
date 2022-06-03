export const parseArgs = () => {
    const { argv } = process;
    const TEMPLATE_FLAG_START = '--';
    argv.forEach((argvValue, index) => {
        if(argvValue.startsWith(TEMPLATE_FLAG_START)) {
            console.log(`${argvValue.slice(2)} is ${argv[index + 1]}`);    
        }
    });
};

parseArgs();
