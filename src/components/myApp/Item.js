import styled from '@emotion/styled';
import Box from '@mui/material/Box';

const Item = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: '#cfe8fc',
  display: 'block',
  width: '100%',
}));

export default Item;
