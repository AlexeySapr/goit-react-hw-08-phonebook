import {
  HeadContainer,
  Title,
  TitleWrapper,
  MaterialUISwitch,
} from './Header.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'redux/phonebook';
import { authSelectors } from 'redux/auth';
import { MdContactPhone } from 'react-icons/md';
import UserMenu from 'components/userMenu/UserMenu';

const Header = () => {
  const themeMode = useSelector(selectors.getThemeMode);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  return (
    <HeadContainer>
      <TitleWrapper>
        <Title variant="h5">
          Phonebook
          <MdContactPhone style={{ marginLeft: '10px' }} />
        </Title>

        {isLoggedIn && <UserMenu emailUser={userEmail} />}

        <MaterialUISwitch
          sx={{ m: 1 }}
          onChange={() => {
            dispatch(
              actions.switchTheme(themeMode === 'light' ? 'dark' : 'light'),
            );
          }}
          inputProps={{ 'aria-label': 'controlled' }}
          checked={themeMode === 'dark'}
        />
      </TitleWrapper>
    </HeadContainer>
  );
};

export default Header;
