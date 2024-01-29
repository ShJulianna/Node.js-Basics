import zlib from "zlib";
import fs from "fs";

const readStream = fs.createReadStream('./src/zip/files/fileToCompress.txt')
const writeStream = fs.createWriteStream('./src/zip/files/archive.gz')
const compressStream = zlib.createGzip()

const compress = async () => {
    await readStream
        .pipe(compressStream)
        .pipe(writeStream)

};

await compress();