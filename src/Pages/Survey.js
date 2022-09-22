import React, { useState } from 'react'
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Modal, Radio, RadioGroup, Stack, Step, StepContent, StepLabel, Stepper, styled, TextField, Typography } from '@mui/material'
import { Header } from '../Components/Header.styled'
import bgImage from '../Assets/banner-image.jpg'
import { blankButton, StyledButton } from '../Components/Button.styled'

export const Survey = ({mode, setMode}) => {

    const [activeStep, setActiveStep] = useState(0);

    const [alert, setAlert] = useState(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const sideModal = {
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        textAlign: 'center',
    };

    const MainWrapper = styled(Box)(({theme}) => ({
        background: `url(${bgImage}) no-repeat center center fixed`, 
        backgroundSize: 'cover',
        height: '100%',
    }))
    
    const ContentWrapper = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
        width: `min(100%, 960px)`,
        padding: '16px',
        marginInline: 'auto',
        height: 'auto',
        [theme.breakpoints.up('md')] : {
            padding: '40px 30px',
        }
    }))

  return (
    <>
    <MainWrapper>
        <ContentWrapper>
            <Header mode={mode} setMode={setMode} />
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step>
                    <StepLabel>
                        <Typography fontWeight={500} mb={1} variant="h4" component="h4">Personal Details</Typography>
                        <Typography variant="body1" component="p">Breif of the family and other related details</Typography>
                    </StepLabel>
                    <StepContent>
                        <Stack direction="row">
                            <Grid container spacing={3}>
                                <Grid item md={6}>
                                    <TextField fullWidth placeholder="Placeholder" id="filled-basic" label="First Name" variant="filled" />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField fullWidth placeholder="Placeholder" id="filled-basic" label="Last Name" variant="filled" />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField fullWidth placeholder="Placeholder" id="filled-basic" label="First Name" variant="filled" />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField fullWidth placeholder="Placeholder" id="filled-basic" label="Last Name" variant="filled" />
                                </Grid>
                            </Grid>
                        </Stack>
                        <StyledButton sx={{marginBottom: '1rem', marginTop: '1.5rem'}} onClick={handleNext}>Next</StyledButton>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>
                        <Typography fontWeight={500} mb={1} variant="h4" component="h4">Some Other Details</Typography>
                        <Typography variant="body1" component="p">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </StepLabel>
                    <StepContent>
                        <Box>
                            <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="text-1" control={<Radio />} label="Some random text 1" />
                                <FormControlLabel value="text-2" control={<Radio />} label="Some random text 2" />
                                <FormControlLabel value="text-3" control={<Radio />} label="Some random text 3" />
                                <FormControlLabel value="text-4" control={<Radio />} label="Some random text 4" />
                                <FormControlLabel value="text-5" control={<Radio />} label="Some random text 5" />
                                <FormControlLabel value="text-6" control={<Radio />} label="Some random text 6" />
                                <FormControlLabel value="text-7" control={<Radio />} label="Some random text 7" />
                            </RadioGroup>
                            </FormControl>
                        </Box>
                        <StyledButton style={blankButton} sx={{marginBottom: '1rem', marginTop: '1.5rem', marginRight: '1rem'}} onClick={handleBack}>Pevious</StyledButton>
                        <StyledButton sx={{marginBottom: '1rem', marginTop: '1.5rem'}} onClick={handleNext}>Next</StyledButton>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>
                        <Typography fontWeight={500} mb={1} variant="h4" component="h4">Some Other Details</Typography>
                        <Typography variant="body1" component="p">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </StepLabel>
                    <StepContent>
                        <Box>
                            <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="text-1" control={<Radio />} label="Some random text 1" />
                                <FormControlLabel value="text-2" control={<Radio />} label="Some random text 2" />
                                <FormControlLabel value="text-3" control={<Radio />} label="Some random text 3" />
                                <FormControlLabel value="text-4" control={<Radio />} label="Some random text 4" />
                                <FormControlLabel value="text-5" control={<Radio />} label="Some random text 5" />
                                <FormControlLabel value="text-6" control={<Radio />} label="Some random text 6" />
                                <FormControlLabel value="text-7" control={<Radio />} label="Some random text 7" />
                            </RadioGroup>
                            </FormControl>
                        </Box>
                        <StyledButton style={blankButton} sx={{marginBottom: '1rem', marginTop: '1.5rem', marginRight: '1rem'}} onClick={handleBack}>Pevious</StyledButton>
                        <StyledButton sx={{marginBottom: '1rem', marginTop: '1.5rem'}} onClick={handleNext}>Next</StyledButton>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>
                        <Typography fontWeight={500} mb={1} variant="h4" component="h4">Some Other Details</Typography>
                        <Typography variant="body1" component="p">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </StepLabel>
                    <StepContent>
                        <Box>
                            <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="text-1" control={<Radio />} label="Some random text 1" />
                                <FormControlLabel value="text-2" control={<Radio />} label="Some random text 2" />
                                <FormControlLabel value="text-3" control={<Radio />} label="Some random text 3" />
                                <FormControlLabel value="text-4" control={<Radio />} label="Some random text 4" />
                                <FormControlLabel value="text-5" control={<Radio />} label="Some random text 5" />
                                <FormControlLabel value="text-6" control={<Radio />} label="Some random text 6" />
                                <FormControlLabel value="text-7" control={<Radio />} label="Some random text 7" />
                            </RadioGroup>
                            </FormControl>
                        </Box>
                        <StyledButton style={blankButton} sx={{marginBottom: '1rem', marginTop: '1.5rem', marginRight: '1rem'}} onClick={handleBack}>Pevious</StyledButton>
                        <StyledButton sx={{marginBottom: '1rem', marginTop: '1.5rem'}} onClick={() => setAlert(true)}>Finish</StyledButton>
                    </StepContent>
                </Step>
            </Stepper>
        </ContentWrapper>
    </MainWrapper>
    <Modal
        open={alert}
        aria-labelledby="Survey"
        aria-describedby=" Survey description"
    >
        <Box color={'text.primary'} sx={sideModal}>
            <Typography variant="h3" component="h3">Thank you ! <br/><br/> Survey form completed and submitted successfuly</Typography>
        </Box>
    </Modal>
    </>
  )
}
