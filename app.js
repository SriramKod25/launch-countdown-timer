const duration = [1, 15, 28, 59]
const DAYS = document.querySelector(".days > span")
const HOURS = document.querySelector(".hours > span")
const MINUTES = document.querySelector(".minutes > span")
const SECONDS = document.querySelector(".seconds > span")

function setTime() {
    DAYS.innerText = duration[0]
    HOURS.innerText = duration[1]
    MINUTES.innerText = duration[2]
    SECONDS.innerText = duration[3]
}

function changeTime() {
    const sum = duration.reduce((prev, curr) => prev += curr, 0);
    if (sum === 1) {
        clearInterval(timer)
        setTimeout(() => [
            alert("Time is over")
        ], 0)
    }

    duration[3] -= 1

    if (duration[3] === -1) {
        duration[3] = 59
        duration[2] -= 1
    }

    if (duration[2] === -1) {
        duration[2] = 59
        duration[1] -= 1
    }

    if (duration[1] === -1) {
        duration[1] = 23
        duration[0] -= 1
    }

    setTime()
}

setTime()
const timer = setInterval(() => {
    changeTime()
}, 1000)