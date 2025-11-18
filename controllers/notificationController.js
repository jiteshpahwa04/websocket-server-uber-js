const notifyDrivers = (req, res) => {
  // Logic to notify drivers
  res.status(200).send('Drivers notified');
}

const removeNotification = (req, res) => {
  // Logic to remove notification
  res.status(200).send('Notification removed');
}

module.exports = {
  notifyDrivers,
  removeNotification
};