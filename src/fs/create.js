import fs from 'fs/promises';
import { constants } from 'fs';

const create = async () => {

    try {
        await fs.access('./src/fs/files/fresh.txt', constants.F_OK);
        console.log('FS operation failed');
    } catch {
        await fs.appendFile('./src/fs/files/fresh.txt', 'I am fresh and young', (error) => {
            if (error) throw error;
            console.log('Error')
        })
    }

};

await create().catch((er) => {
    console.log(er)
}
);