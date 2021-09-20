/**
 * The Observer pattern offers a subscription model 
 * in which objects subscribe to an event and get notified when the event occurs.
 */

export class HomeComponent{
    constructor(user){
        this.user = user
        this.children = []
        this.browser = {
            root: {}
        }
    }

    updateUser = newUser => {
        this.user = newUser
        this.renderAll()
    }

    appendChild = observer => this.children.push(observer)
    removeChild = observer => {
        observer.destructor(this)
        this.children = this.children.filter( child => !(child instanceof observer) )
    }

    renderAll = () => {
        this.children.forEach( e => e.render(this) )
    }
}

export class AvatarComponent{
    render = parent => {
        if(parent.user.avatar)
            parent.browser.root.avatar = `<img src="${parent.user.avatar}"/>`
    }
    static destructor = parent => {
        delete parent.browser.root.avatar
    }
}

export class NameComponent{
    render = parent => {
        if(parent.user.username)
            parent.browser.root.title = `<h1>${parent.user.username}</h1>`
    }
    static destructor = parent => {
        delete parent.browser.root.title
    }
}
