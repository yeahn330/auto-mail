import * as React from 'react';
import ListItem from '@mui/material/ListItem';  
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
        <AssignmentIcon />&nbsp;&nbsp;&nbsp;
      <ListItemText primary="받은메일함 리스트" />
    </ListItem>
  </div>
);
