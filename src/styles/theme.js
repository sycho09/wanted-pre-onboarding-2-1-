import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8',
      ligth: '#a2c6f6',
      superLight: '#e8f1fd'
    },
    background: {
      default: '#f9f9f9'
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: [
      'Pretendard',
      'Noto Sans KR',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    }
  }
});

export default theme;
