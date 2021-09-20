/**
 * The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request. 
 * This pattern is essentially a linear search for an object that can handle a particular request.
 */

class middleware1{
    constructor(){
        this.name = 'middleware 1'
        this.next = null
    }
    setNext = (nextStep) => {
        this.next = nextStep
    }
    run = () => {
        if(this.next)
            return ['middleware 1', ...this.next.run()]
        return ['middleware 1']
    }
}

class middleware2{
    constructor(){
        this.name = 'middleware 2'
        this.next = null
    }
    setNext = (nextStep) => {
        this.next = nextStep
    }
    run = () => {
        if(this.next)
            return ['middleware 2', ...this.next.run()]
        return ['middleware 2']
    }
}

class main{
    run(){
        const md1 = new middleware1()
        const md2 = new middleware2()
        md1.setNext(md2)
        return ['runing...',...md1.run()]
    }   
}

export default main