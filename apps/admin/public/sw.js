self.addEventListener("message", (event) => {
  console.log(event.data); // outputs {'hello':'world'}
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      self.registration.showNotification(event.data);
    }
  });
});
