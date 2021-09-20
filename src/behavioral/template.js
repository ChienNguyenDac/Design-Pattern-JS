/**
 * Extends 
 */

class Bakery{
    make(flourWeight){
        if(flourWeight < 100)
            return this.useSmallMachine(flourWeight)
        return this.useBigMachine(flourWeight)
    }

    useBigMachine = flourWeight => Math.floor(flourWeight/10)
}

class Bakery_DongTam extends Bakery{
    constructor(){
        super()
    }

    useSmallMachine = flourWeight => Math.floor(flourWeight/8)
}

class Bakery_BaoThanh extends Bakery{
    constructor(){
        super()
    }

    useSmallMachine = flourWeight => Math.ceil(flourWeight/5)
}

export {
    Bakery_BaoThanh,
    Bakery_DongTam
}