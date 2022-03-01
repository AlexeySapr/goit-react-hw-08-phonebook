import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SignupLoginLink = styled(Link)(({ theme }) => {
  //   console.log('theme: ', theme);

  return {
    marginLeft: '10px',
    color: theme.palette.primary.main,
  };
});
