import Die from "./components/Die.jsx"
import { useState } from "react"
import { nanoid} from "nanoid"
import Confetti from 'react-confetti'
import ReactConfetti from "react-confetti"


export default function App() {

    const [dice, setDice] = useState(generateAllNewDice()) 

    const gameWon = dice.every(die =>
      die.isHeld) && dice.every(die => 
        die.value === dice[0].value)


    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: nanoid()
              
              }))
    }

    function rollDice(){
      setDice(prevDice =>
        prevDice.map((die =>
        die.isHeld ? die :
        {
          ...die,
          value : Math.ceil(Math.random() * 6)
        } 
        ))
      )
    }

    function hold(id){
      setDice(prevDice =>
        prevDice.map(die =>
          die.id ===id ? {
            ...die,
            isHeld: !die.isHeld 
          } : die
        )
      )
      
    }

    
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
          {gameWon ? <ReactConfetti
          gravity={0.2}
          initialVelocityX={2}
          initialVelocityY={2}
          numberOfPieces={200}
          opacity={1}
          recycle
          run
          width={1380}
          wind={0}
          height={888}
          /> : null}
          <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice} 
            className="rollbtn">
              {gameWon ? "New Game" : "Roll Dice"}
            </button>
        </main>
    )
}