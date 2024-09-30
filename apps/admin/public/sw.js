const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.active) {
        console.log("Service worker active");
      }
      showNotification("Service worker installed");
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

function showNotification() {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        setTimeout(() => {
          registration.showNotification("Вам пришел новый заказ", {
            body: "Давайте его скорее отработаем!",
            vibrate: [200, 100, 200, 100, 200, 100, 200],
            tag: "vibration-sample",
          });
        }, 10000);
      });
    }
  });
}

// …

registerServiceWorker();
