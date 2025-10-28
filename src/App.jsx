import { useState } from "react"
import Die from "./components/Die.jsx"
import { nanoid } from "nanoid"

export default function App() {

    const [dice, setDice] = useState(generateAllNewDice())

    function rollDice(){
      setDice(generateAllNewDice())
    }
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
              value: Math.ceil(Math.random() * 6),
               isHeld: false,
               id: nanoid()
              
              }))
    }

    function hold(id){
       console.log(id)
    }
   hold()
    
    const diceElements = dice.map((dieobj  =>(
      <Die key ={dieobj.id} 
      id = {dieobj.id}
      value = {dieobj.value}
      isHeld={dieobj.isHeld}
      hold = {()=> hold(dieobj.id)}
      />
    )))
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice} className="rollbtn">Roll Dice</button>
        </main>
    )
}