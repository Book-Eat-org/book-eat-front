self.addEventListener("message", (event) => {
  console.log(event.data); // outputs {'hello':'world'}
  self.registration.showNotification(event.data);
});
