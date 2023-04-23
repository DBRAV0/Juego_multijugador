//modulo para unir directorios
const path=require('path');
const express=require('express');
//app tiene toda la configuración del servidor
const app=express();

//configuración
//Configuramos el puerto predefinido
app.set('port', process.env.PORT || 3000);

//archivos estáticos
//console.log(__dirname +'\\public');
//enviamos la carpeta al navegador
app.use(express.static(path.join(__dirname, 'public')));

//iniciar servidor
const server=app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

//requiero el modulo socket.io es la comunicación bidireccional necesita un servidor
const SocketIO= require('socket.io');
//comunicación de websocket
const io =SocketIO(server);
//websocket
io.on('connection', (socket)=> {
    console.log('new connection', socket.id);
//El servidor recibe datos del evento
    socket.on('chat:message',(data) => {
        io.sockets.emit('chat:message', data);
        //console.log(data);
    });

    socket.on('chat:typing', (data) => {
        //console.log(data);
        socket.broadcast.emit('chat:typing', data);
    });

});
