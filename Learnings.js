const { rose } = require('./modules');
console.log(rose);

const { readFile } = require('fs').promises;

async function readThatFile() {
    const txt = await readFile('./modules.js', 'utf8');
    console.log(txt);
}

readThatFile();

const { rose3 } = { rose3: '🌹🌹🌹' }
console.log(rose3);