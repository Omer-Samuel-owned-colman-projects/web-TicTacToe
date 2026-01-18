export type CellValue = 'X' | 'O' | null
export type GameStatus = 'next-turn' | 'winner' | 'draw'
export type Player = 'X' | 'O'

export const STATUS_COLORS: Record<GameStatus, string> = {
  'next-turn': '#2196f3',
  'winner': '#4caf50',
  'draw': '#ff9800',
}

export const CELL_COLORS = {
  default: '#e0e0e0',
  winning: '#2196f3',
} as const
