import { useEffect, useState } from "react";
import Square from './square'

export default function Game() {

    const [xOy, setXoY] = useState(Math.random() > 0.5 ? 'X' : 'O');

    const [board, setBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ])

    const CheckWinner = () => {
        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {

            if (new Set(board[rowIndex]).size === 1 && board[rowIndex][0] !== '') {
                alert("Winner is " + xOy)
            }

            const topDownList = []
            for (let colIndex = 0; colIndex < board.length; colIndex++) {
                topDownList.push(board[colIndex][rowIndex])
            }

            if (new Set(topDownList).size === 1 && topDownList[0] !== '') {
                alert("Winner is " + xOy)
            }

            // Diagonal`i tamamlayin
        }
    }

    const click = (x, y) => {
        const boardCopy = [...board]
        if (!boardCopy[x][y]) {
            boardCopy[x][y] = xOy;
            setBoard(boardCopy)
        }
    }

    useEffect(() => {
        CheckWinner()
        setXoY(xOy === "X" ? "O" : "X")
    }, [board])

    return <div className="w-full h-screen flex items-center">
        <div className="grid grid-cols-3 w-[30%] mx-auto bg-yellow-100 items-center">
            {board.map((row, rowIndex) =>
                row.map((value, colIndex) => <Square key={`${rowIndex}-${colIndex}`} value={value} onClick={() => click(rowIndex, colIndex)} />)
            )}
        </div>

    </div>;
}
