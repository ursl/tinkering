let input2 = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.pause(100)
    input2 = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(input2)
    if (input2 < 100) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
