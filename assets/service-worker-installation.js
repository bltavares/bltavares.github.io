// Check that service workers are registered
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}
