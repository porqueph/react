import { useState } from "react"
import "./Game.css"

const Game = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters,guesses, score}) => {
  
  const [letter, setLetter] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter)
  }
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
       <h1>adivinhe a palavra</h1>
       <h3 className="tip">
        dica sobre a palavra: <span>{pickedCategory}</span>
       </h3>
       <p>você ainda tem {guesses} tentativa(s)</p>
       <div className="wordContainer">
         {letters.map((letter, i)=>(
            guessedLetters.includes(letter) ? (
              <span key={i} className="letter">{letter}</span>
            ) : (
              <span key={i} className="blankSquare"></span>
            )
         ))}
       </div>
       <div className="letterContainer">
          <p>tente adivinhar uma letra da palavra:</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="letter"  maxLength="1" required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}/>
            <button>jogar</button>
          </form>
       </div>
       <div className="wrongLettersContainer">
        <p>letras utilizadas</p>
        {wrongLetters.map((letter, i) =>(
          <span key={i}>{letter},</span>
        ))}
       </div>
    </div>
  )
}

export default Game