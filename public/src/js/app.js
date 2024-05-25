if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('service worker registered'))
        .catch(err => console.log('service worker not registered', err))
}

var deferredPrompt;
window.addEventListener('beforeinstallprompt', e => {
    console.log('beforeinstallprompt fired')
    e.preventDefault()
    deferredPrompt = e
    return false
})