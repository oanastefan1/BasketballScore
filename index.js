let countHomeEl = document.getElementById("count-home")
let countGuestsEl = document.getElementById("count-guests")

let countHome = 0
let countGuests = 0

function add1() {
    countHome = countHome + 1
    countHomeEl.innerText = countHome
}

function add2() {
    countHome = countHome + 2
    countHomeEl.innerText = countHome
}

function add3() {
    countHome = countHome + 3
    countHomeEl.innerText = countHome
}

function addgu1() {
    countGuests = countGuests + 1
    countGuestsEl.innerText = countGuests
}

function addgu2() {
    countGuests = countGuests + 2
    countGuestsEl.innerText = countGuests
}

function addgu3() {
    countGuests = countGuests + 3
    countGuestsEl.innerText = countGuests
}

function reset() {
    countHome = 0
    countGuests = 0
    countHomeEl.innerText = countHome
    countGuestsEl.innerText = countGuests
}