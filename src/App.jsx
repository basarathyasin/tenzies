import { useState } from "react"
import Die from "./components/Die.jsx"

export default function App() {
    /**
     * Challenge: Create a `Roll Dice` button that will re-roll
     * all 10 dice
     * 
     * Clicking the button should generate a new array of numbers
     * and set the `dice` state to that new array (thus re-rendering
     * the array to the page)
     */
    
    const [dice, setDice] = useState(generateAllNewDice())
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    
    const diceElements = dice.map((num , index) =>(
      <Die key ={index} value = {num}/>
    ))
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            
            {/*New button here*/}
            
        </main>
    )
}