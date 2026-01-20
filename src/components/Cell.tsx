import { Paper } from '@mui/material'
import { CellValue, CELL_COLORS } from '../types'

interface CellProps {
  value: CellValue
  isWinning: boolean
  onClick: () => void
}

const Cell = ({ value, isWinning, onClick }: CellProps) => {
  return (
    <Paper
      onClick={onClick}
      sx={{
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        bgcolor: isWinning ? CELL_COLORS.winning : CELL_COLORS.default,
        color: isWinning ? 'white' : 'black',
        cursor: 'pointer'
      }}
    >
      {value || ''}
    </Paper>
  )
}

export default Cell
