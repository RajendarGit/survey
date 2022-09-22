import { Box, Button, styled } from '@mui/material'
import React from 'react'
import { Logo } from './Logo.styled'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const StyledHeader = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
}))

export const Header = ({mode, setMode}) => {
  return (
    <StyledHeader>
        <Logo/>
        <Button
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            variant='outlined'
            startIcon={mode === 'dark' ? <LightModeIcon/> : <DarkModeIcon/>}
        >
            {mode === 'dark' ? 'Light Theme' : 'Dark Theme'}
        </Button>
    </StyledHeader>
  )
}
