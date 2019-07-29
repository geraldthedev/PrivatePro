export const items = [ 
    {
           name: "axe",
            durability: 100
        
        },
        {
        name: "matches",
            amount: 40
        }, 
        {
        name: "fabric",
            length: 100
        
        }, 
        {
        name: "water",
            amount: 80
        
        }, 
        {
        name: "compass",
            have: true
        
        }]

export const abilities =[ 

            {
              name: "firstAid",
                   usage: 50,
           },
           {
           name: "hunting",
               usage: 60
           
           },
           {
           name: "cooking",
               usage: 40
           
           },
           {
           name: "mediation",
               usage: 5
           
           }, 
           {
           name: "fighting",
               strength: 70
           
}]


export class Person{
            constructor(props){
            
                let item=items[Math.floor(Math.random()*items.length)]
                 let  ability=abilities[Math.floor(Math.random()*abilities.length)]
            }
}