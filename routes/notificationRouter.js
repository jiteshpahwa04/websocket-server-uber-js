const express = require('express');
const notificationRouter = express.Router();

notificationRouter.post('/notify-drivers', notifyDrivers);
notificationRouter.post('/remove-notification', removeNotification);

module.exports = notificationRouter;