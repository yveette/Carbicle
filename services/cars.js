const fs = require('fs/promises');

async function read() {
    try{

        const file = await fs.readFile('./services/data')
    }catch{
        console.error('Database read error');
        console.error(err);
        process.exit(1);
    }
}

async function write(data) {

}