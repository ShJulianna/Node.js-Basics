import { Transform } from 'stream'

const transform = async () => {

    const reverseText = new Transform({
        transform(peace, encoding, callback) {
            this.push(peace.toString().split('').reverse().join(''));
            callback();
        }
    });
    process.stdin.pipe(reverseText).pipe(process.stdout)
};

await transform();