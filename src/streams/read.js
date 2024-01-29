import fs from 'fs'


const read = async () => {
    const data = fs.createReadStream('./src/streams/files/fileToRead.txt', {})
    data.on('data', (peace) => {
        process.stdout.write(peace.toString());
    })
};

await read();