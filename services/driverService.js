const {redisClient} = require('../utils/redisClient');

const setDriverSocket = async(driverId, socketId) => {
    try{
        await redisClient.hSet('driver_sockets', driverId, socketId);
    }catch(error) {
        throw error;
    }
};

const getDriverSocket = async(driverId) => {

    try{
        return await redisClient.hGet('driver_sockets', driverId);
    }catch(error) {
        throw error;
    }
};

module.exports = {
    setDriverSocket,
    getDriverSocket
}

