/**
 * The Bridge pattern allows two components, a client and a service,
 *  to work together with each component having its own interface.
 */

class Core{
    constructor(name, price){
        this.name = name
        this.price = price
    }
    getName = () => (this.name)
    getPrice = () => (this.price) 
}

class Corei3 extends Core{
    constructor(){
        super('i3', 200)
    }
}

class Laptop{
    constructor(core){
        this.core = core
    }
    getPrice = () => ( this.core.getPrice() + 500 )
}

class Dell extends Laptop{
    constructor(core){
        super(core)
    }
    getInfo(){
        return `Laptop: Dell, CPU: [core ${core.getName()}, price ${core.getPrice()}]`
    }
}

export { Dell, Corei3 }