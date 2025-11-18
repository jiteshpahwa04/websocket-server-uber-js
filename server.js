const {app, server, io} = require('./config/appConfig');
const notificationRouter = require('./routes/notificationRouter');
const { setDriverSocket } = require('./services/driverService');


app.use(express.json());
app.use('/notifications', notificationRouter);

io.on('connection', (socket)=> {
    console.log('New client connected:', socket.id);

    // Handle login
    socket.on('driver-login', async (data) => {
        try {
            const {driverId} = data;
            await setDriverSocket(driverId, socket.id);
            console.log(`Driver ${driverId} logged in with socket ID ${socket.id}`);
            socket.emit('login-success', {message: 'Login successful', driverId});
        } catch (error) {
            console.error('Error during driver login:', error);
            socket.emit('error', {message: 'Login failed'});
        }
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        // Optionally, remove the driver-socket mapping from Redis here
    });
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});