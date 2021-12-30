import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { CustomCopyright } from './component/CustomCopyright';
import MenuLink from './component/menuLink';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';  
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Link} from "react-router-dom";
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

const AppBar = styled(MuiAppBar, {
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      overflowX: 'hidden',
      width: theme.spacing(28),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(28),
      }
    }
  })
)

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: 'flex' }}>
          <CssBaseline />
      <AppBar position="absolute">
      <Toolbar
          sx={{
          pr: '24px', // keep right padding when drawer closed
          }}
      >
          <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
          >
          비즈뿌리오 메일답변 추천시스템
          </Typography>
      </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
      <Toolbar
          sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
          }}
      >
      </Toolbar>
      <Divider />
          <List>
          <ListItem button>
              <AssignmentIcon />&nbsp;&nbsp;&nbsp;
          <ListItemText component={Link} primary="받은메일함 리스트" to="/"/>
          </ListItem>

          </List>
      <Divider />
      </Drawer>
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
              }}
            >
              <Toolbar />
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                  {/* Recent Orders */}
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                      <MenuLink />
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
              <CustomCopyright sx={{ pt: 4 }} />
            </Box>
          </Box>
        </ThemeProvider>
  )};
  export default App;