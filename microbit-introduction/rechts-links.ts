input.onButtonPressed(Button.A, function () {
    if (buttonA == 1) {
        zeitStopp = input.runningTime()
        pressed = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (buttonB == 1) {
        zeitStopp = input.runningTime()
        pressed = 1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.pause(500)
    zeitTotal = 0
    for (let index = 0; index < 4; index++) {
        if (randint(0, 1) == 0) {
            buttonA = 1
            buttonB = 0
            pressed = 0
            zeitStart = input.runningTime()
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            while (true) {
                if (pressed == 1) {
                    zeitTotal += zeitStopp - zeitStart
                    break;
                }
                basic.pause(10)
            }
        } else {
            buttonA = 0
            buttonB = 1
            pressed = 0
            zeitStart = input.runningTime()
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            while (true) {
                if (pressed == 1) {
                    zeitTotal += zeitStopp - zeitStart
                    break;
                }
                basic.pause(10)
            }
        }
        basic.clearScreen()
        basic.pause(100)
    }
    basic.showString("" + convertToText(zeitTotal) + "ms")
})
let buttonB = 0
let pressed = 0
let zeitStopp = 0
let buttonA = 0
let zeitStart = 0
let zeitTotal = 0
zeitTotal = 0
zeitStart = 0
