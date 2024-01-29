import fs from 'fs/promises';

const list = async () => {
    try {
        await fs.access('./src/fs/files')
        await fs.readdir('./src/fs/files', { recursive: true })
            .then((data) => {
                data.map((name) => {console.log(name)})
            })
            .catch((error) => {console.log(error)})
    } catch {
        console.log('FS operation failed');
    }
};

await list();