var pathname = window.location.pathname;
var hostname = window.location.hostname;
var date = "noti" + Date.now();

if (
  pathname == "/gp/buy/spc/handlers/display.html" &&
  !hostname.includes("smile")
) {
  smilified = "https://" + hostname.replace("www", "smile") + pathname;

  chrome.runtime.sendMessage("", {
    type: "notification",
    options: {
      title: "Do you want to smilify this order?",
      message: "Click here to get redirected to Amazon Smile to place this order.",
      iconUrl: "icons/icon128.png",
      type: "basic",
    },
    newURL: smilified,
  });
}
