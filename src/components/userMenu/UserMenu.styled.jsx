import styled from '@emotion/styled';

export const UserName = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
`;
