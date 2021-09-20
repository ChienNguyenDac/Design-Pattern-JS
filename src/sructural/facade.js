/**
 * The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems. 
 * It is a simple pattern that may seem trivial but it is powerful and extremely useful. 
 * It is often present in systems that are built around a multi-layer architecture.
 */
class Bank{
    constructor(name){
        this.name = name
        this.key = new RegExp('159$')
    }
    verify = (token) => {
        return this.key.test(token)
    }
}

class E_Banking{
    constructor(token, balance, nameBank){
        this.bank = new Bank(nameBank)
        this.balance = balance
        this.token = token
    }
    checkout = (amount) => {
        if(this.bank.verify(this.token)){
            this.balance -= amount
            return "success"
        }   
        return "fail" 
    }
}

export default E_Banking