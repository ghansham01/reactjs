import { useState } from 'react'
import Borad from './components/Borad'
// import GameStatus from './components/GameStatus'
import './App.css'

function App() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return
        const nextSquares = squares.slice()
        nextSquares[i] = xIsNext ? 'X' : 'O'
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }

    const handlerestart = () => {
        setSquares(Array(9).fill(null))
        setXIsNext(true)
    }

    const winner = calculateWinner(squares)
    let status
    if (winner) {
        status = `Winner: ${winner}`
    } else if (squares.every(Boolean)) {
        status = "It's a draw!"
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-800 to-black">
            <h3 className="text-3xl font-bold mb-6 text-white drop-shadow">Tic Tac Toe</h3>
            <div className="mb-4 text-lg font-medium text-gray-700 bg-white px-4 py-2 rounded shadow">
                {status}
            </div>
            <Borad squares={squares} onClick={handleClick} />
            <button className='m-4 p-3 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
             onClick={handlerestart}>
                Restart the Game
            </button>
        </div>
    )
}

// Helper function
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (let line of lines) {
        const [a, b, c] = line
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

export default App