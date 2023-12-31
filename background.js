chrome.browserAction.onClicked.addListener(function(tab) {
  // Get the current tab's URL
  var currentUrl = tab.url;

  // Modify the URL (replace "medium.com" with "mediumfree.com")
  var redirectUrl = currentUrl.replace("medium.com", "medium-free.vercel.app/read?url="+currentUrl);

  // Redirect the tab to the modified URL
  chrome.tabs.update(tab.id, { url: redirectUrl });
});
