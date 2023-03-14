import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@material-ui/core';

function DataTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((post) => (
          <TableRow key={post.id}>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.author}</TableCell>
            <TableCell>{post.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={props.posts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Table>
  );
}

export default DataTable;
