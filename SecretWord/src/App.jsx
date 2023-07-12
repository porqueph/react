import { useState } from 'react'
import './App.css'
import { useCallback, useEffect } from 'react'


import {wordsList} from './data/word'


import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id:1, name:"Start"},
  {id:2, name:"Game"},
  {id:2, name:"end"}
]
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [picketCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () =>
  {
    //random cat
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)
    // random word

    const word = words[category][Math.floor(Math.random() * Object.keys(words[category]).length)]
    console.log(word)

    return {word, category}
  }

  const startGame = () =>
  {
    // pick word and cat
    const {word, category} = pickWordAndCategory();
    console.log(word, category);
    //letters arrays
    let wordLetters = word.split("");
    console.log(wordLetters);
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    console.log(wordLetters);

    //set state

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(letters);
    setGameStage(stages[1].name);
    
  }

  //proccess letter input
  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }

// retry
  const retry = () => {
    setGameStage(stages[0].name)
  }

 
  return (
    <div className='App'>
      {gameStage === 'Start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'Game' && <Game verifyLetter={verifyLetter}></Game> }
      {gameStage === 'end' && <GameOver retry={retry}></GameOver>}
    </div>
  )
}

export default App
