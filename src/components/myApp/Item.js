import styled from '@emotion/styled';
import Box from '@mui/material/Box';

const Item = styled(Box)(({ theme }) => {
  console.log('theme: ', theme);

  return {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.card,
    display: 'block',
    width: '100%',
    padding: '30px',
    marginBottom: '20px',
  };
});

export default Item;
