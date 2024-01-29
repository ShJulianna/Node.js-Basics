const parseArgs = () => {

    process.argv.map((arg,i, arr) => {
        if (i >=2 && i<arr.length-1 && i%2 === 0){
            console.log(arr[i] + ' is ' + arr[i+1])
        }

    })
};

parseArgs();