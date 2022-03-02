import { AppBar, Button, Paper, Toolbar, Typography } from '@mui/material';

const Header = ({ changeTheme }) => {

    return (
        <Paper  sx={{ marginBottom: '2em' }} elevation={3}>
            <AppBar color="background" position="static" sx={{padding:'1em 3em'}}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button variant="contained"
                        onClick={changeTheme}>
                        Change Theme
                    </Button>
                    <Button variant="contained" color="secondary">
                        Change Theme
                    </Button>
                </Toolbar>
            </AppBar>
        </Paper>
    )
}

export default Header