input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
radio.setGroup(5)
basic.forever(function () {
    if (input.lightLevel() < 50) {
        radio.sendString("LIGHTS ON")
    } else {
        radio.sendString("LIGHTS OFF")
    }
    basic.pause(1000)
})
