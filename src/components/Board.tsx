import { Grid } from '@mui/material'
import Cell from './Cell'
import { CellValue } from '../types'

interface BoardProps {
  board: CellValue[]
  winningLine: number[]
  onCellClick: (index: number) => void
}

const Board = ({ board, winningLine, onCellClick }: BoardProps) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        width: 300,
        mb: 3
    }}>
      {board.map((cell: CellValue, index: number) => {
        const isWinningCell: boolean = winningLine.includes(index)
        return (
          <Grid item xs={4} key={index}>
            <Cell 
              value={cell} 
              isWinning={isWinningCell}
              onClick={() => onCellClick(index)}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Board
