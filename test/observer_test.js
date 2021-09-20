import { expect } from "chai"
import { HomeComponent, AvatarComponent, NameComponent } from "../src/behavioral/observer.js"

describe('Observer Pattern Test', ()=>{
    it('testcase 1', ()=>{
        const homepage = new HomeComponent()
        homepage.appendChild(new AvatarComponent())
        homepage.appendChild(new NameComponent())
        const user = {
            username: 'chien',
            avatar: '/uploads/avatar.png'
        }
        homepage.updateUser(user)
        expect(homepage.browser.root.avatar).to.equal('<img src="/uploads/avatar.png"/>')
        homepage.removeChild(AvatarComponent)
        expect(homepage.browser.root.avatar).to.equal(undefined)
        expect(homepage.browser.root.title).to.equal('<h1>chien</h1>')
    })
})