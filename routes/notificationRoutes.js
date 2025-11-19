const express = require('express');
const {notifyDrivers, removeRideNotification} = require('../controllers/NotificationController');

const router = express.Router();

router.post('/notify-drivers', notifyDrivers);
router.post('/remove-ride-notification', removeRideNotification);

module.exports = router;