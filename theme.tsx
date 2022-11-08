import { extendTheme } from '@chakra-ui/react';
import { ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const fonts = {
  body: `'Open Sans', sans-serif`,
  poppins: `'Poppins', sans-serif`,
  openSans: `'Open Sans', sans-serif`,
  manjari: `'Manjari', sans-serif`,
  roboto: `'Roboto', sans-serif`,
};

const textStyles = {
  h1: {
    'font-family': 'var(--chakra-fonts-manjari)',
    'font-weight': 'bolder',
    'text-align': 'center',
  },

  h2: {
    'font-family': 'var(--chakra-fonts-roboto)',
    'font-weight': 'bold',
  },

  dashLink: {
    fontSize: '1.3rem',
  },

  leaderboardHeader: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: '1.3rem',
  },
};

const layerStyles = {
  primaryBtn: {
    padding: '1.5rem',
  },

  sideNavBox: {
    margin: 0,
    padding: '1rem',
    paddingLeft: '1.4rem',
    // color: 'red',
    // border: 'thin solid green',
    transition: 'all 0.5s',
    fontWeight: 'bolder',
    letterSpacing: '0.085rem',

    '&:hover': {
      backgroundColor: 'blue.50',
    },
  },
};

const components = {
  Link: {
    baseStyle: {
      // color: 'blue.600',
      '&:hover': {
        textDecoration: 'none',
        // color: 'blue.300',
      },
    },
  },
};

const colors = {
  primary: '#2F855A',
};

const theme = extendTheme({
  config,
  fonts,
  textStyles,
  layerStyles,
  components,
  colors,
});

export default theme;
