const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./happy.png', (err, data) => {
        if (err) throw err;
            res.end(data);
    });
}).listen(3000, () => console.log('listening on 3000'));