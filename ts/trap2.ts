/**
 * ----------------------------------------------------------------------
 *
 * -- Program v1 for trap, based on single server motor and bump sensor
 *            v2 for trap, added PIR sensor
 *
 * -- 2024/12/02
 *    2025/03/03
 *
 * ----------------------------------------------------------------------
 */

// -- reset
input.onButtonPressed(Button.A, function () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo16, 40)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})

// -- both buttons do a reset
// pins.digitalWritePin(DigitalPin.P8, 0);
input.onButtonPressed(Button.B, function () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo16, 40)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})

// -- start of main program
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo16, 40)
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
    // pins.digitalWritePin(DigitalPin.P8, 0);
    // basic.pause(100);
    if (pins.analogReadPin(AnalogReadWritePin.P3) < 100) {
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo16, 130)
        basic.showIcon(IconNames.Heart)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo16, 130)
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(500)
})
