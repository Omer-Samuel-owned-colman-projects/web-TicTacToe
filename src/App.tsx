import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Status from './components/Status'
import Board from './components/Board'
import RestartButton from './components/RestartButton'
import { CellValue, GameStatus, Player } from './types'

const App = () => {
  const [board, setBoard] = useState<CellValue[]>([
    null, 'X', null,
    'O', null, null,
    null, 'X', null
  ])
  const [status, setStatus] = useState<GameStatus>('next-turn')
  const [winner, setWinner] = useState<CellValue>(null)
  const [nextPlayer, setNextPlayer] = useState<Player>('O')
  const [winningLine, setWinningLine] = useState<number[]>([])

  const handleRestart = () => {
    setBoard(Array(9).fill(null))
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
        <Board board={board} winningLine={winningLine} />
        <RestartButton onRestart={handleRestart} />
      </Box>
  )
}

export default App
