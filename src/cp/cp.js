import  { fork } from 'node:child_process';



const spawnChildProcess = async (args) => {
    const child =  fork('script.js',  args, {cwd: './src/cp/files'})
    child.on('message',(data) => {
       console.log("child got data:" + data)
   })


};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["arg1", "arg2"]);
