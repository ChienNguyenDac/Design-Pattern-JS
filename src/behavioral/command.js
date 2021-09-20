/**
 * 5 part: Command, concreteCommand, Client, Invoker, Receiver
 */

export class Fan{
    constructor(){
        this.speed = 0
        this.lastSpeed = null
    }
    changeSpeed = speed => this.speed = speed
    turnOff = () => {
        this.lastSpeed = this.speed
        this.speed = 0
    }
    turnOn = () => this.speed = this.lastSpeed || 1
}

export class ChangeSpeedCommand{
    constructor(fan){
        this.fan = fan
    }
    run = speed => this.fan.changeSpeed(speed)
}

export class TurnOffCommand{
    constructor(fan){
        this.fan = fan
    }
    run = () => this.fan.turnOff()
}

export class TurnOnCommand{
    constructor(fan){
        this.fan = fan
    }
    run = () => this.fan.turnOn()
}

export class Remote{
    constructor(command){
        this.command = command
    }
    setCommand(command){
        this.command = command
    }
    run = () => this.command.run()
}
