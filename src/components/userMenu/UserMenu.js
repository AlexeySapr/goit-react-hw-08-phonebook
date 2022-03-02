import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { MdOutlineLogout } from 'react-icons/md';
import { UserName } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const UserMenu = ({ emailUser }) => {
  const dispatch = useDispatch();
  return (
    <UserName>
      {emailUser}
      <LoadingButton
        type="click"
        onClick={() => dispatch(authOperations.logOutOperation())}
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
