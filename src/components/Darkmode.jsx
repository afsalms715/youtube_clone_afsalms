import React from 'react'
import Switch from '@mui/joy/Switch';
import DarkMode from '@mui/icons-material/DarkMode';

const Darkmode = () => {
  return (
    <Switch
    checked={false}
    color="neutral"
    size="sm"
    variant="solid"
      slotProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: <DarkMode />,
        },
      }}
      sx={{
        '--Switch-thumb-size': '28px',
        opacity:"1"
      }}
    />
  )
}

export default Darkmode