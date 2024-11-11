self.addEventListener("message", (event) => {
  if (Notification.permission === "granted") {
    self.registration.showNotification(event.data);
  }
  self.registration.showNotification(event.data);
});
