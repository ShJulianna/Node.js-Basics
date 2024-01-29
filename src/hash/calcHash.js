import { createHash } from 'crypto';
import fsPromise from 'fs/promises';


const calculateHash = async () => {
    const data = await fsPromise.readFile('./src/streams/files/fileToRead.txt', { encoding: 'utf8' });
    const hash = createHash('sha256').update(data).digest('hex');

    process.stdout.write(hash);

};

await calculateHash();