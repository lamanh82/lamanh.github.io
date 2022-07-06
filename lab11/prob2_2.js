const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    try {
        let data = fs.readFileSync(path.join(__dirname, 'happy.png'));
        
        res.end(data);
    } catch {
        console.error("Can't read file");
    }
}).listen(3000, () => console.log('listening on 3000'));