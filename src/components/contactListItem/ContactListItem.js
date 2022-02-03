import { Circles } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import { useDeleteContactMutation } from 'services/contactsAPI';

import { ListItem, Text, ItemBtn } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, phone }) => {
  const theme = useTheme();
  const [onDelete, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ListItem>
      <Text>
        {name}: {phone}
      </Text>
      <ItemBtn type="button" onClick={() => onDelete(id)} disabled={isDeleting}>
        {isDeleting ? (
          <Circles
            ariaLabel="loading-indicator"
            color={`${theme.colors.white}`}
            wrapperStyle={theme.btnLoader}
            height={20}
            width={20}
          />
        ) : (
          'Delete'
        )}
      </ItemBtn>
    </ListItem>
  );
};
