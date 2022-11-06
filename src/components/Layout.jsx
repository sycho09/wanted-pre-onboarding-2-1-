import React from 'react';
import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const LayoutRoot = styled('div')(({ theme }) => ({
  // backgroundColor: theme.palette.grey[100],
  width: '100%',
  minHeight: '100vh',
  overflow: 'hidden'
}));

const LayoutWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
}));

const LayoutContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
}));

const LayoutContent = styled('div')(({ theme }) => ({
  flex: '1 1 auto',
  height: '100%',
  overflowX: 'hidden',
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1028px',
    margin: '0 auto'
  }
}));

const Layout = () => {
  return (
    <LayoutRoot>
      <LayoutWrapper>
        <LayoutContainer>
          <Sidebar />
          <Box sx={{ width: '100%' }} px={5} pt={8}>
            <Outlet />
          </Box>
        </LayoutContainer>
      </LayoutWrapper>
    </LayoutRoot>
  );
};

export default Layout;
