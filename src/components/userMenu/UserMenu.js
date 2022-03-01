import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { MdOutlineLogout } from 'react-icons/md';
import { UserName } from './UserMenu.styled';

const UserMenu = () => {
  return (
    <UserName>
      UserMenu
      <LoadingButton
        // type="submit"
        // loading={isLoading}
        // disabled={isLoading}
        // loadingIndicator="Adding..."
        variant="outlined"
        size="small"
        endIcon={<MdOutlineLogout />}
        sx={{ ml: 2 }}
      >
        Logout
      </LoadingButton>
    </UserName>
  );
};

export default UserMenu;
