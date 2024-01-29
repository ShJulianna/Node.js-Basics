import fs from "fs";

const write = async () => {

    const data = fs.createWriteStream('./src/streams/files/fileToWrite.txt', {})
    process.stdin.on('data', function (input) {
        data.write(input)
    })
};

await write();