import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Status from './components/Status'
import Board from './components/Board'
import RestartButton from './components/RestartButton'
import { CellValue, GameStatus, Player } from './types'

const initialBoard = Array(9).fill(null)
const winningRows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]

const winningColumns = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
]

const winningDiagonals = [
  [0, 4, 8],
  [2, 4, 6],
]

const winningCombinations = [
  ...winningRows,
  ...winningColumns,
  ...winningDiagonals,
]

const checkWinner = (currentBoard: CellValue[]): { winner: CellValue; line: number[] } => {
  for (const winningCombination of winningCombinations) {
    const [cell1, cell2, cell3] = winningCombination
    if (
      currentBoard[cell1] &&
      currentBoard[cell1] === currentBoard[cell2] &&
      currentBoard[cell1] === currentBoard[cell3]
    ) {
      return { winner: currentBoard[cell1], line: winningCombination }
    }
  }
  return { winner: null, line: [] }
}

const checkDraw = (currentBoard: CellValue[]): boolean => {
  return currentBoard.every(cell => Boolean(cell))
}

const App = () => {
  const [board, setBoard] = useState<CellValue[]>(initialBoard)
  const [status, setStatus] = useState<GameStatus>('next-turn')
  const [winner, setWinner] = useState<CellValue>(null)
  const [nextPlayer, setNextPlayer] = useState<Player>('X')
  const [winningLine, setWinningLine] = useState<number[]>([])

  const handleCellClick = (index: number) => {
    if (board[index] || status !== 'next-turn') {
      return
    }

    const updatedBoard = [...board]
    updatedBoard[index] = nextPlayer

    const { winner: gameWinner, line } = checkWinner(updatedBoard)
    if (gameWinner) {
      setBoard(updatedBoard)
      setStatus('winner')
      setWinningLine(line)
      setWinner(gameWinner)
      return
    }

    if (checkDraw(updatedBoard)) {
      setBoard(updatedBoard)
      setStatus('draw')
      setWinningLine([])
      return
    }

    setBoard(updatedBoard)
    setNextPlayer(nextPlayer === 'X' ? 'O' : 'X')
  }

  const handleRestart = () => {
    setBoard(initialBoard)
    setStatus('next-turn')
    setWinner(null)
    setNextPlayer('X')
    setWinningLine([])
  }

  return (
    <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Tic Tac Toe
        </Typography>

        <Status status={status} nextPlayer={nextPlayer} winner={winner} />
        <Board board={board} winningLine={winningLine} onCellClick={handleCellClick} />
        <RestartButton onRestart={handleRestart} />
      </Box>
  )
}

export default App
