input.onButtonPressed(Button.A, function () {
    butA += 1
    basic.showNumber(butA)
    basic.clearScreen()
})
radio.onReceivedValue(function (name, value) {
    if (name == "buttonA") {
        basic.showNumber(value)
    }
    if (name == "x") {
        if (value > 500) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else if (value > 0) {
            basic.showLeds(`
                . . # . .
                . . . # .
                . # # # #
                . . . # .
                . . # . .
                `)
        } else if (value < -500) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # .
                . # . . .
                . . # . .
                `)
        }
    }
    if (name == "fwd") {
        basic.showString("F")
    }
    if (name == "bwd") {
        basic.showString("B")
    }
})
let butA = 0
radio.setGroup(56)
butA = 0
let accX = 0
basic.forever(function () {
    while (true) {
        accX = input.acceleration(Dimension.X)
        radio.sendValue("x", accX)
        basic.pause(50)
    }
})
