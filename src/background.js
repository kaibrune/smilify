chrome.runtime.onMessage.addListener((data) => {
  if (data.type === "notification") {
    var noti_id = "noti" + Date.now();
    chrome.notifications.create(noti_id, data.options);
    chrome.notifications.onClicked.addListener(function (notifId) {
      if (notifId == noti_id) {
        redirectPage(data.newURL, noti_id);
      }
    });
  }
});

function redirectPage(smileURL, noti_id) {
  chrome.tabs.update(undefined, {
    url: smileURL,
  });
  chrome.notifications.clear(noti_id);
}
