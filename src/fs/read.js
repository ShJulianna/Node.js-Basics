import fs from 'fs/promises';
import {constants} from "fs";

const read = async () => {
    try {
        await fs.access('./src/fs/files/fileToRead.txt', constants.F_OK)
        const data = await fs.readFile('./src/fs/files/fileToRead.txt', { encoding: 'utf8' });
        console.log(data)

    } catch {
        console.log('FS operation failed');
    }
};

await read();