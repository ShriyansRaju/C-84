canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
roverWidth = 100
roverHeight = 90
roverX = 10
roverY = 10
backgroundImage = "mars.jpg"
roverImage = "rover.png"


function add() {
    backgroundImageTag = new Image()
    backgroundImageTag.onload = uploadBackground
    backgroundImageTag.src = backgroundImage

    roverImageTag = new Image()
    roverImageTag.onload = uploadRover
    roverImageTag.src = roverImage
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height)
}

function uploadRover() {
    ctx.drawImage(roverImageTag, roverX, roverY, roverWidth, roverHeight)
}

window.addEventListener("keyDown", myKeyDown)

function myKeyDown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)
    if (keyPressed == "37") {
        console.log("left key")
    }
    if (keyPressed == "38") {
        console.log("up key")
    }

    if (keyPressed == "39") {
        console.log("right key")
    }

    if (keyPressed == "40") {
        console.log("down key")
    }
}