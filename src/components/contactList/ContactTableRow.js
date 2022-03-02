import { useEffect } from 'react';
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDeleteContactMutation } from 'services/contactsAPI';
import toast from 'react-hot-toast';

const ContactTableRow = ({ id, name, number }) => {
  const [onDelete, { data, isLoading: isDeleting }] =
    useDeleteContactMutation();

  useEffect(() => {
    if (data) {
      toast.success(`Contact ${data.name} successfully deleted`);
    }
  }, [data]);

  return (
    <TableRow hover role="listitem" tabIndex={-1}>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{number}</TableCell>
      <TableCell align="center">
        <LoadingButton
          onClick={() => onDelete(id)}
          disabled={isDeleting}
          loading={isDeleting}
          loadingIndicator="Deleting..."
          variant="outlined"
        >
          Delete
        </LoadingButton>
      </TableCell>
    </TableRow>
  );
};

ContactTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactTableRow;
