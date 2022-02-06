import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Title = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase',
}));

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeadContainer = styled(Container)(() => ({
  display: 'block',
  marginBottom: '1rem',
  boxShadow: '0px 8px 15px -10px rgba(34, 60, 80, 0.6)',
}));
