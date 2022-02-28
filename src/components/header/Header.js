import {
  HeadContainer,
  Title,
  TitleWrapper,
  MaterialUISwitch,
} from './Header.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'redux/phonebook';

import { FcContacts } from 'react-icons/fc';

const Header = () => {
  const themeMode = useSelector(selectors.getThemeMode);
  console.log('themeMode: ', themeMode);
  const dispatch = useDispatch();

  return (
    <HeadContainer>
      <TitleWrapper>
        <Title variant="h5">
          Phonebook
          <FcContacts />
        </Title>

        <MaterialUISwitch
          sx={{ m: 1 }}
          onChange={() => {
            dispatch(
              actions.switchTheme(themeMode === 'light' ? 'dark' : 'light'),
            );
          }}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </TitleWrapper>
    </HeadContainer>
  );
};

export default Header;
