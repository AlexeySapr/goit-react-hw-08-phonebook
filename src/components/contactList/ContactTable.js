import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import ContactTableHead from './ContactTableHead';
import ContactTableRow from './ContactTableRow';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const ContactTable = ({ contacts }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [page, setPage] = useState(0);
  console.log('page: ', page);
  console.log('contacts.length: ', contacts.length);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    console.log('property: ', property);
    console.log('order: ', order);
    console.log('orderBy: ', orderBy);

    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    console.log('event: ', event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    console.log('eventRowsPerPage: ', event);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (contacts.length <= rowsPerPage && page > 0) {
      setPage(0);
    }
  }, [contacts.length, rowsPerPage, page]);

  useEffect(() => {
    const pageNum = Math.floor(contacts.length / rowsPerPage);
    if (page > pageNum) {
      console.log('pageInUse: ', page);
      console.log('pageNum: ', pageNum);
      setPage(pageNum);
    }
  }, [contacts.length, page, rowsPerPage]);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 300 }}
            aria-labelledby="tableTitle"
            size={'normal'}
          >
            <ContactTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />

            <TableBody>
              {contacts
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(contact => (
                  <ContactTableRow key={contact.id} {...contact} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={contacts.length}
          rowsPerPage={rowsPerPage}
          page={contacts.length <= rowsPerPage ? 0 : page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

ContactTable.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactTable;
