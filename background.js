chrome.webRequest.onSendHeaders.addListener(details => {
    chrome.storage.local.get(["needRedirect", "previousTabId", "previousUrl"], result => {
        if (result.needRedirect) {
            chrome.tabs.update(result.previousTabId, { url: result.previousUrl })
            chrome.storage.local.set({ needRedirect: false })
        }
        else if (details.url.indexOf("login") == -1) {
            chrome.storage.local.set({ previousUrl: details.url })
            chrome.storage.local.set({ previousTabId: details.tabId })
        }
        else if (details.url.indexOf("login/?code=") != -1) chrome.storage.local.set({ needRedirect: true })
    })
}, { urls: ["https://online-edu.mirea.ru/*"], types: ["main_frame"] })

// chrome.webRequest.onSendHeaders.addListener(details => {
//     console.log(details)
// }, { urls: ["<all_urls>"], types: ["main_frame"] })