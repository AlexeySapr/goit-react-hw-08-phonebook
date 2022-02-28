export const getTheme = mode => ({
  typography: {
    fontFamily: 'Kanit',
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: 400;
          src: url("https://fonts.googleapis.com/css2?family=Kanit:wght@200;400;600&display=swap");
        }
      `,
    },
  },

  palette: {
    mode,
    ...(mode === 'light'
      ? {
          background: {
            card: '#E3E6F0',
          },
        }
      : {
          background: {
            card: '#222C2F',
          },
        }),
  },
});
