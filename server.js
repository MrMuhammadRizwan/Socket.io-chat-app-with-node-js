const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(7000, function () {
    console.log('listening on *:7000');
});


io.on('connection', function (socket) {
    socket.broadcast.emit('hi');
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
    });
});
