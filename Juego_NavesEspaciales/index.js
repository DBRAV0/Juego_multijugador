//modulo para unir directorios
const path=require('path');
const express=require('express');
//app tiene toda la configuración del servidor
const app=express();


//configuración
//Configuramos el puerto predefinido
app.set('port', process.env.PORT || 4000);

//archivos estáticos
//console.log(__dirname +'\\public');
//enviamos la carpeta al navegador
app.use(express.static(path.join(__dirname, 'public')));

//iniciar servidor
const server=app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
const SocketIO= require('socket.io');
const io =SocketIO(server);

var players = {};
var star = {
    x: Math.floor(Math.random() * 700) + 50,
    y: Math.floor(Math.random() * 500) + 50
  };
  var scores = {
    blue: 0,
    red: 0
  };

io.on('connection', function (socket) {
    console.log('new connection', socket.id);
  // create a new player and add it to our players object
  players[socket.id] = {
    rotation: 0,
    x: Math.floor(Math.random() * 700) + 50,
    y: Math.floor(Math.random() * 500) + 50,
    playerId: socket.id,
    team: (Math.floor(Math.random() * 2) == 0) ? 'red' : 'blue'
  };
  // send the players object to the new player
  socket.emit('currentPlayers', players);
  // update all other players of the new player
  socket.broadcast.emit('newPlayer', players[socket.id]);
  // when a player disconnects, remove them from our players object
  // send the star object to the new player
    socket.emit('starLocation', star);
  // send the current scores
    socket.emit('scoreUpdate', scores);
    socket.on('disconn', function () {
    console.log('user disconnected');
    // remove this player from our players object
    delete players[socket.id];
    // emit a message to all players to remove this player
    io.emit('disconn', socket.id);
  });
  // when a player moves, update the player data
    socket.on('playerMovement', function (movementData) {
    players[socket.id].x = movementData.x;
    players[socket.id].y = movementData.y;
    players[socket.id].rotation = movementData.rotation;
    // emit a message to all players about the player that moved
    socket.broadcast.emit('playerMoved', players[socket.id]);
    socket.on('starCollected', function () {
        if (players[socket.id].team === 'red') {
          scores.red += 10;
        } else {
          scores.blue += 10;
        }
        star.x = Math.floor(Math.random() * 700);
        star.y = Math.floor(Math.random() * 500);
        io.emit('starLocation', star);
        io.emit('scoreUpdate', scores);
      });
  });
});
