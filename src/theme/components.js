const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '10px',
        textTransform: 'none',
        padding: '10px 24px',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        color: 'white',
      },
      containedPrimary: {
        background: 'linear-gradient(90deg, #2979ff, #00c6ff)',
        boxShadow: '0px 4px 20px rgba(41, 121, 255, 0.5)',
        '&:hover': {
          background: 'linear-gradient(90deg, #00c6ff, #2979ff)',
        },
      },

      outlinedPrimary: {
        borderColor: '#2979ff',
        '&:hover': {
          borderColor: '#00c6ff',
          backgroundColor: '#121c34',
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: '16px',
        backgroundImage: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '20px',
        boxShadow: '0px 8px 24px rgba(0,0,0,0.3)',
      },
    },
  },
};

export default components;
