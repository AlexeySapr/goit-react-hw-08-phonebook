import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDeleteContactMutation } from 'services/contactsAPI';

const ContactTableRow = ({ id, name, phone }) => {
  const [onDelete, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <TableRow hover role="listitem" tabIndex={-1}>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{phone}</TableCell>
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
  phone: PropTypes.string.isRequired,
};

export default ContactTableRow;
