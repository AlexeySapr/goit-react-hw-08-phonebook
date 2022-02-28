import PropTypes from 'prop-types';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableCell from '@mui/material/TableCell';

const headCells = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'phone',
    label: 'Phone',
  },
];

function ContactTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ backgroundColor: 'background.card' }}>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            sx={{
              fontSize: '1.275rem',
              textAlign: 'center',
              padding: 'normal',
              textTransform: 'uppercase',
              color: 'text.secondary',
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align={'center'} padding={'normal'}></TableCell>
      </TableRow>
    </TableHead>
  );
}

ContactTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default ContactTableHead;
