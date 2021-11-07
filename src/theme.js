import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f07229',
    },
    secondary: {
      main: '#0E7AC4',
    },
    rank: {
      bronze: '#9A4E3F',
      silver: '#919191',
      gold: '#EDCC59',
      platinum: '#F6F6F6',
      diamond: '#698FFF',
      master: '#FFB500',
      default: {
        light: 'rgba(255,255,255,0.5)',
        main: 'rgba(255,255,255,0.15)',
        dark: 'rgba(0,0,0,0.15)',
      }
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'rgba(255,255,255,0.15)', // rank default main
          '&.Mui-disabled': {
            color: 'rgba(0,0,0,0.15)', // rank default dark
          }
        }
      }
    }
  }
});

export default theme;
