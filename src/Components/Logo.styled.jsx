import { CardMedia, styled } from "@mui/material";

const LogoImage = styled(CardMedia)(({theme}) => ({
    fontFamily: theme.fonts.heading,
    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    letterSpacing: '.5rem',
    textTransform: 'uppercase',
    marginBottom: '1rem',
    margin: '0',
}))

export const Logo = () => {
    return (
        <LogoImage>Logo</LogoImage>
    )
}