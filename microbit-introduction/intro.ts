input.onButtonPressed(Button.A, function () {
    if (stage == 0) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    }
    stage = 1
})
input.onButtonPressed(Button.AB, function () {
    if (stage == 2) {
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        5000,
        440,
        255,
        200,
        2590,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
    stage = 3
})
input.onButtonPressed(Button.B, function () {
    if (stage == 1) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
    }
    stage = 2
})
input.onGesture(Gesture.Shake, function () {
    if (stage == 3) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Sad)
    }
    stage = 10
})
let stage = 0
basic.clearScreen()
music.setVolume(255)
for (let index = 0; index < 5; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
}
stage = 0
basic.forever(function () {
    if (stage != 10) {
        basic.pause(100)
    } else {
        if (input.isGesture(Gesture.LogoUp)) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (input.isGesture(Gesture.LogoDown)) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                # # # # #
                # . # . #
                # . # . #
                # . # . #
                # # # # #
                `)
        }
    }
})
