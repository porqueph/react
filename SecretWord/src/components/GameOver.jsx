import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
        <h1>game over</h1>
        <button onClick={retry}>reiniciar</button>
    </div>
  )
}

export default GameOver