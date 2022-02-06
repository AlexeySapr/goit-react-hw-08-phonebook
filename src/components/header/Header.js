import { HeadContainer, Title, TitleWrapper } from './Header.styled';
import Switch from '@mui/material/Switch';

import { FcContacts } from 'react-icons/fc';

const Header = () => {
  return (
    <HeadContainer>
      <TitleWrapper>
        <Title variant="h5">
          Phonebook
          <FcContacts />
        </Title>

        <Switch
          // onChange={colorMode.toggleColorMode}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </TitleWrapper>
    </HeadContainer>
  );
};

export default Header;
