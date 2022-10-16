document.getElementById("record").addEventListener(function(request) {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabCapture.capture({audio: true, video: true}, callback);
    });
});