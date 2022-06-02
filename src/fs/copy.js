import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NAME_DIR = 'files';
const NAME_COPY_DIR = 'files_copy';
const pathToDir = path.join(__dirname, NAME_DIR);
const pathToCopyDir = path.join(__dirname, NAME_COPY_DIR);
const ERROR_MESSAGE = 'FS operation failed';

const createDir = async (pathDir) => {
    try {
        await fs.mkdir(pathDir);
        return true;
    } catch {
        return false;
    }
}

const readDir = async (pathToDir) => {
    try {
        const resultReadDir = await fs.readdir(pathToDir);
        return resultReadDir;
    } catch {
        return false;
    }
}

export const copy = async () => {
    try {
        const readDirResult = await readDir(pathToDir);
        if (!readDirResult) {
            throw new Error(ERROR_MESSAGE);
        }
        const isCreateDir = await createDir(pathToCopyDir);
        if (!isCreateDir) {
            throw new Error(ERROR_MESSAGE);
        }
        readDirResult.forEach(async (fileName) => {
            const pathFile = path.join(pathToDir, fileName);
            const pathCopyFile = path.join(pathToCopyDir, fileName);
            await fs.copyFile(pathFile, pathCopyFile);
        });
    } catch (error) {
        console.log(error.message);
    }
};

copy();