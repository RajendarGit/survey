import { Box, CardMedia, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { StyledCard } from '../Components/Card.styled'
import wallImage from '../Assets/banner-image.jpg'
import bgImage from '../Assets/bg-elipse.png'
import { Logo } from '../Components/Logo.styled'
import { lgButton, StyledButton } from '../Components/Button.styled'
import { Link } from "react-router-dom";

export const Landing = () => {
    const LandingSection = styled(Box)(({theme}) => ({
        background: theme.palette.mode === 'light' && `url(${bgImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
    }))
    
    const IntroWrapper = styled(Box)(({theme}) => ({
        width: 'min(90%, 500px)',
        marginInline: 'auto',
        textAlign: 'center',
        height: '100vh'
    }))

    const CenterVertical = styled(Box)(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    }))

  return (
    <LandingSection>
        <Stack direction="row">
            <Grid container>
                <Grid item md={4} lg={5} sx={{display: {xs: 'none', md: 'block'}}}>
                    <StyledCard>
                        <CardMedia
                            sx={{width: '100%', height: '100vh'}}
                            component="img"
                            image={wallImage}
                            alt="Population sensus survey"
                        />
                    </StyledCard>
                </Grid>
                <Grid item md={8} lg={7}>
                    <IntroWrapper>
                        <CenterVertical>
                            <Box>
                                <StyledCard sx={{background: 'transparent', marginBottom: '1rem'}}>
                                    <Logo/>
                                </StyledCard>
                                <Typography variant='body1' component='p' mb={4}>
                                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet loremipsum dolor sit amet loremipsum dolor sit amet lorem. loremipsum dolor sit amet loremipsum dolor sit amet lorem.
                                </Typography>
                                <Link to='/survey'>
                                    <StyledButton style={lgButton} variant='contained'>Take survey</StyledButton>
                                </Link>
                            </Box>
                        </CenterVertical>
                    </IntroWrapper>
                </Grid>
            </Grid>
        </Stack>
    </LandingSection>
  )
}
