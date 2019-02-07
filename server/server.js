let express = require('express');
let app = express();
let PORT = 5000;

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
    
});

app.use(express.static('server/public') );

let players = require('./module/players')

app.get('/players', (req, res) => {
    res.send(players);    
});

