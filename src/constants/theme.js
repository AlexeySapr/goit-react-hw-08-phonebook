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
            card: 'red',
          },
        }),
  },

  // colors: {
  //   primary: '#57d0e6',
  //   white: '#fff',
  //   borderColor: '#bdbdbd',
  //   textColor: '#212529',
  //   inputBoxShadow: '0 0 0 0.2rem rgba(87, 208, 230, 0.5)',
  // },

  // btnLoader: {
  //   justifyContent: 'center',
  //   alignIitems: 'center',
  // },
});
