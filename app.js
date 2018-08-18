let express = require('express');
let app = express();

const port = 8000;

app.use(express.static('./public'));

app.get('/', (req, res) => res.send('<h1>Hello, Express!</h1>'));

app.listen(port, ()=> console.log(`Listening at http://localhost:${port}`));