let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let PORT = 5000;

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
    
});

app.use(express.static('server/public') );
app.use(bodyParser.urlencoded({extended: true} ) );

//store players data in server
let players = require('./module/players')
app.get('/players', (req, res) => {
    res.send(players);    
});

//post new player in server
app.post('/players', (req, res) => {
    players.push(req.body.name);
    res.sendStatus(201);
});

