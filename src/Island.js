import React from 'react'
import {Person, items, abilities}from './components/person'


export default class Island extends React.Component{
    constructor(props){
        super(props)
        this.state={
        capacity:  this.capacity= 5,
        diameter: this.diameter =Math.floor(Math.random()*20),
        rescue: this.rescue=Math.floor(Math.random()*50),
        character: {
            charName: "",
            player:new Person()
        }
        }
    
        this.createPerson= this.createPerson.bind(this)

    }



    //Use state to create a new person to add to the island from input field
createPerson=(event)=>{
    event.preventDefault()
    this.setState({
        
    })
    

console.log(this.state.player)

}
    

    render(){
        return(
            <div>
                <p>Welcome, player. You wake up on a island with four other castaways. 
                    You are to use your ability and item you have to work with the other 
                    players to survive until help arrives. Be attentive, because if you 
                    do not do your part, you can be voted and casted away by your fellow
                    survivors. 
                    </p>
                    <input placeholder="Your name..." onChange={this.createPerson} ></input>
            </div>
        )
    }
}