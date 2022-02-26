//sets setter to true
//after 2secs sets setter to false

export function showNotification(setter) {
    setter(true)
    setTimeout(() => {
        setter(false)
    }, 2000);
}