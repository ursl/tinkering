// ----------------------------------------------------------------------
// -- Program v1 for trap, based on single server motor and bump sensor
// -- 2024/12/02
// ----------------------------------------------------------------------

// -- reset
input.onButtonPressed(Button.A, function () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo16, 40)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
})
// -- both buttons do a reset
input.onButtonPressed(Button.B, function () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo16, 40)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
})

// -- start of main program
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo16, 40)
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P3) < 100) {
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo16, 130)
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
