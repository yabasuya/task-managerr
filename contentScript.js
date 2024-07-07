chrome.runtime.sendMessage({ action: "fetchData" }, response => {
    if (response.error) {
        console.error('Error fetching data:', response.error);
    } else {
        console.log('Data fetched:', response.data);
    }
});
