const fs = require('node:fs');
const arr = [];

fs.readFile('./binary.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('u cant do it bro, suck it');
    } else {
        const lines = data.split('\n')
        for(let i = 0; i < lines.length-1; i++){
            console.log(lines[i].length);
            console.log(lines[i].length == lines[1 + i].length);
        }
    }
})
