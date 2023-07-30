import "./Game.css"

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
       <h1>adivinhe a palavra</h1>
       <h3 className="tip">
        dica sobre a palavra: <span>Dica...</span>
       </h3>
       <div className="wordContainer">
         <span className="letter">A</span>
         <span className="blankSquare"></span>
       </div>
       <div className="letterContainer">
          <p>tente adivinhar uma letra da palavra:</p>
          <form>
            <input type="text" name="letter"  maxLength="1" required/>
            <button>jogar</button>
          </form>
       </div>
       <div className="wrongLettersContainer">
        <p>letras utilizadas</p>
        <span>a,</span>
        <span>b,</span>
       </div>
    </div>
  )
}

export default Game