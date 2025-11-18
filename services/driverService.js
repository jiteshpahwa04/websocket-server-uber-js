const {redisClient} = require('../config/redis');

const setDriverSocket = async (driverId, socketId) => {
    try {
        await redisClient.hSet('driverSockets', driverId, socketId);
    } catch (error) {
        console.error('Error setting driver socket:', error);
    }
}

const getDriverSocket = async (driverId) => {
    try {
        const socketId = await redisClient.hGet('driverSockets', driverId);
        return socketId;
    } catch (error) {
        console.error('Error getting driver socket:', error);
        return null;
    }
}

module.exports = {
    setDriverSocket,
    getDriverSocket
};