const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    const src = fs.createReadStream('./happy.png');
    src.pipe(res);
}).listen(3000, () => console.log('listening on 3000'));