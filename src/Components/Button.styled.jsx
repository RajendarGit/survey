import { Button, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

export const lgButton = {
    width: '100%',
    padding: '1rem',
}

export const blankButton = {
    backgroundColor: 'transparent',
    color: grey[700],
}

export const StyledButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    '&:hover': {
        backgroundColor: theme.palette.primary.sub,
    }
}))