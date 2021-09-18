/**
 * The Adapter pattern translates one interface (an object‘s properties and methods) to another
 * Old => new 
 */
class Phone{
    constructor(name){
        this.name = name
    }
    call(phoneNumber){
        return `This is calling to ${phoneNumber}`
    }
    listener(phoneNumber){
        return `This is receiving from ${phoneNumber}`
    }
}

class ModernPhone{
    constructor(name){
        this.name = name
    }
    call(phoneNumber){
        return `This is calling to ${phoneNumber}`
    }
    listener(phoneNumber){
        return `This is receiving from ${phoneNumber}`
    }
    play(nameApp){
        return `This can play ${nameApp}`
    }
}


export {
    Phone, 
    ModernPhone
}