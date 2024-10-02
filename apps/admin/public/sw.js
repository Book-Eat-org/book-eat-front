self.addEventListener("message", (event) => {
  console.log(event.data); // outputs {'hello':'world'}

  console.log(Notification.permission);
  if (Notification.permission === "granted") {
    self.registration.showNotification(event.data);
  }
  self.registration.showNotification(event.data);
});
