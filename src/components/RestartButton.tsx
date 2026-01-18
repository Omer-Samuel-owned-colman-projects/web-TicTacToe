import { Button } from '@mui/material'

interface RestartButtonProps {
  onRestart: () => void
}

const RestartButton = ({ onRestart }: RestartButtonProps) => {
  return (
    <Button variant="contained" onClick={onRestart}>
      Restart
    </Button>
  )
}

export default RestartButton
