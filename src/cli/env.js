
const parseEnv = () => {
    const envNames = Object.keys(process.env).filter(str => str.startsWith('RSS_'))
    envNames.map(name => {
        console.log(name+'='+process.env[name])
    })
};

parseEnv();