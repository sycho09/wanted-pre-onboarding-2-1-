import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';

const drawerWidth = 240;

export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [select, setSelect] = useState('');

  const navigate = useNavigate();
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 0) navigate('/');
    if (index === 1) navigate('/card');
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      variant='permanent'
      anchor='left'
    >
      <Typography variant='h5' pt={2} px={2}>
        LEXVW
      </Typography>
      <Divider variant='middle' sx={{ mt: 5 }} />
      <List py={1}>
        <ListItem py={1}>
          <Typography variant='caption' gutterBottom>
            서비스
          </Typography>
        </ListItem>
        <ListItem>select menu</ListItem>
        <ListItem sx={{ pt: 4, pb: 1 }}>
          <Typography variant='caption' gutterBottom>
            광고센터
          </Typography>
        </ListItem>
        {['대시보드', '광고관리'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
