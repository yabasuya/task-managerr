chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchData") {
        fetchData().then(data => {
            sendResponse({ data });
        }).catch(error => {
            sendResponse({ error: error.message });
        });
        return true; // Indicate that the response is asynchronous
    }
});
