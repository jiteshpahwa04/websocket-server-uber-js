const {app, server, io} = require('./config/appConfig');
const notificationRoutes = require('./routes/notificationRoutes');
const {setDriverSocket} = require('./services/driverService');
const express = require('express');
app.use('/api', notificationRoutes);
app.use(express.static('.'));


io.on('connection', (socket) => {

    console.log('New Connection: ', socket.id);

    socket.on('driver-login', async(data) => {
        try{
            const {driverId} = data;

            await setDriverSocket(driverId, socket.id);
            console.log(`Driver ${driverId} connected with socket ${socket.id}`);
            socket.emit('login-success', {
                message: 'Successfully connected',
                driverId
            });

        }catch{
            socket.emit('error', {
                message: 'Connection Failed'});
        }
    })

    socket.on('disconnect', async() => {

    });

});


const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`WebSocket server running on port ${PORT}`);
})