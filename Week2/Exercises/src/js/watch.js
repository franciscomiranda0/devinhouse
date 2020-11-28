const watchTime = new Date()

document.body.onload = () => {
    setWatchView()
}

setInterval(changeWatch, 1000)

function changeWatch() {
    if (hasSystemTimeChanged) {
        watchTime = new Date()
        setWatchView()
    }
}

function hasSystemTimeChanged() {
    return (!(watchTime.getMinutes === new Date().getMinutes()))
}

const setWatchView = () => {
    document.querySelector('span').innerText =
        `${watchTime.getHours()}:${watchTime.getMinutes()}h`
}