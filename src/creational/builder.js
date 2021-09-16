/**
 * Builder pattern: allow a client to contruct a complex object by specifying the type and content. 
 * The detail is hidden from client
 */
class House{
    constructor(){
        this.floor = null,
        this.room = null,
        this.door = null
    }
}

class HouseBuilder{
    constructor(){
        this.house = new House()
    }
    buildFloor(numFloor){
        this.house.floor = numFloor
        return this
    }
    buildRoom(numRoom){
        this.house.room = numRoom
        return this
    }
    buildDoor(numDoor){
        this.house.door = numDoor
        return this
    }
    getInfo(){
        return {...this.house}
    }
}

export default HouseBuilder
