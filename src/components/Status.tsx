import { Box, Typography } from '@mui/material'
import { GameStatus, Player, STATUS_COLORS } from '../types'

interface StatusProps {
  status: GameStatus
  nextPlayer?: Player
  winner?: Player | null
}

const Status = ({ status, nextPlayer, winner }: StatusProps) => {
  const getStatusText = () => {
    switch (status) {
        case 'next-turn':
            return `Next turn: ${nextPlayer}`
        case 'winner':
            return `Winner is: ${winner}`
        case 'draw':
            return 'Draw'
        default:
            return ''
    }
  } 
  
  return (
    <Box
      sx={{
        mb: 3,
        p: 2,
        bgcolor: STATUS_COLORS[status],
        color: 'white',
        borderRadius: 1,
        minWidth: 200,
        textAlign: 'center',
      }}
    >
      <Typography>{getStatusText()}</Typography>
    </Box>
  )
}

export default Status
