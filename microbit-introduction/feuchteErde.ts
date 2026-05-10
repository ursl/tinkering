input.onButtonPressed(Button.A, function () {
    schwelle += 1
})
input.onButtonPressed(Button.AB, function () {
    schwelle = 1020
    feucht = 0
})
input.onButtonPressed(Button.B, function () {
    schwelle += -1
})
let schwelle = 0
let feucht = 0
let input2 = 0
basic.showIcon(IconNames.Heart)
feucht = 0
music.setVolume(208)
schwelle = 1024
basic.clearScreen()
basic.forever(function () {
    basic.pause(100)
    input2 = pins.analogReadPin(AnalogReadWritePin.P1)
    basic.showNumber(input2)
    if (input2 <= schwelle) {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Yes)
        if (feucht == 0) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.UntilDone)
            feucht = 1
        }
        basic.clearScreen()
    }
})
