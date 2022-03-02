import { createTheme } from '@mui/material';


const staticTheme = {
    primary: {
        main: '#ff4000',
        contrastText: '#fff',
    },
    secondary: {
        main: '#ff0066',
        contrastText: '#ffffff',
    },

}

export const lightTheme = createTheme({
    palette: {
        ...staticTheme,
        background: {
            default: "#e4f0e2",
        },
        text: {
            primary: "#1a1a1a"
        }
    }
})

export const darkTheme = createTheme({
    palette: {
        ...staticTheme,
        background: {
            default: "#262626",
            paper: '#333333'

        },
        text: {
            primary: "#f2f2f2"
        }
    }
})