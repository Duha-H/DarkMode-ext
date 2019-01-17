browser.contextMenus.create({
    id: "dark-mode",
    title: "Dark mode"
});
  
browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "dark-mode") {
        browser.tabs.executeScript({
        file: "darkmode.js"
        });
    }
});