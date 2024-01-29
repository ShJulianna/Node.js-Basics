import fs from "fs";
import zlib from "zlib";

const writeStream = fs.createWriteStream('./src/zip/files/fileToCompress.txt')
const readStream =  fs.createReadStream('./src/zip/files/archive.gz')
const decompressStream = zlib.createGunzip()

const decompress = async () => {
    await readStream
        .pipe(decompressStream)
        .pipe(writeStream)};

await decompress();