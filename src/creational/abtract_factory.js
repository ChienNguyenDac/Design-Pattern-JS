class Motor{
    constructor(name, color){
        this.name = name || 'Motor'
        this.color = color || 'Black'
    }
    getInfo(){
        return 'This is a Motor'
    }
}

class Car{
    constructor(name, color){
        this.name = name || 'Car'
        this.color = color || 'White'
    }
    getInfo(){
        return 'This is a Car'
    }
}

function VehicleFactory(pattern){
    const { type, name, color } = pattern
    if( type === 'motor' )
        return new Motor(name, color)
    else if( type === 'car' )
        return new Car(name, color)
    return null
}

export default VehicleFactory