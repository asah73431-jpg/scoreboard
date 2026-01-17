let homeScore = 0
let guestScore = 0
let saveEl = document.getElementById("new")
function addHome(points) {
  homeScore += points
  document.getElementById("home-score").innerText = homeScore
}

function addGuest(points) {
  guestScore += points
  document.getElementById("guest-score").innerText = guestScore
}

function newgame() {
    console.log(homeScore)
    console.log(guestScore)
    document.getElementById("home-score").innerText = 0
    document.getElementById("guest-score").innerText = 0

    homeScore = 0
    guestScore = 0
}
