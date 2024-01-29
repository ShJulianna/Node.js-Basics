import fs from 'fs/promises';
import {constants} from "fs";


const rename = async () => {
    try {
        await fs.access('./src/fs/files/properFilename.md', constants.F_OK)
        console.log('FS operation failed');
    }catch{
        try {
            await fs.access('./src/fs/files/wrongFilename.txt', constants.F_OK);
            await fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md')
        }
        catch {
            console.log('FS operation failed');
        }
    }
};

await rename();