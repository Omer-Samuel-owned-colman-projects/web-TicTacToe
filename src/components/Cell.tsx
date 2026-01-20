import { Paper } from '@mui/material'
import { CellValue, CELL_COLORS } from '../types'

interface CellProps {
  value: CellValue
  isWinning: boolean
}

const Cell = ({ value, isWinning }: CellProps) => {
  return (
    <Paper
      sx={{
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        bgcolor: isWinning ? CELL_COLORS.winning : CELL_COLORS.default,
        color: isWinning ? 'white' : 'black',
      }}
    >
      {value || ''}
    </Paper>
  )
}

export default Cell
