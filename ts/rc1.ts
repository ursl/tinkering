// ----------------------------------------------------------------------
// -- rc1
// ------
// Initial starting point for RC kittronik 5655 with motor 1
//
// Usage:
// ------
// transmitter: press A+B (Tx will be displayed)
//              press A to increase the speed
//              press B to decrease the speed
// receiver:    connect motor to M1
//
// 2021/12/03
//
// ----------------------------------------------------------------------

input.onButtonPressed(Button.A, function () {
    if (isTx == 1) {
        if (speed <= 100) {
            speed += 10
        }
        radio.sendValue("go", speed)
        basic.showString(convertToText(speed))
    }
})
input.onButtonPressed(Button.AB, function () {
    isTx = 1
    basic.showString("Tx")
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (isTx == 1) {
        if (speed > 10) {
            speed += -10
        }
        radio.sendValue("slow", speed)
        basic.showString(convertToText(speed))
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "go") {
        if (isTx == 0) {
            speed = value
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, speed)
            basic.showIcon(IconNames.StickFigure)
            basic.pause(100)
            basic.clearScreen()
        }
    }
    if (name == "slow") {
        if (isTx == 0) {
            speed = value
            if (speed >= 20) {
                kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, speed)
            } else {
                kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
            }
            basic.showIcon(IconNames.Heart)
            basic.pause(100)
            basic.clearScreen()
        }
    }
})
let speed = 0
let isTx = 0
radio.setGroup(13)
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
basic.pause(1000)
basic.clearScreen()
isTx = 0
speed = 10
basic.forever(function () {

})
