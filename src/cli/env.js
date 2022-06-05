export const parseEnv = () => {
    const { env } = process;
    const PREFIX_ENV = 'RSS_';
    const listEnvName = Object.keys(env);
    listEnvName.forEach(envName => {
        if(envName.startsWith(PREFIX_ENV)) console.log(`${envName}=${env[envName]}`);
    });
};

parseEnv();