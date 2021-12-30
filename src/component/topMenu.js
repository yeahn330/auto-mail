import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
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

export default function TopMenu() {
    return (
    <div>
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
    </div>
    )
}