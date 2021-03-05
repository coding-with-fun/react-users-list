import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@material-ui/core';
import React, { Fragment, useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import UserModal from './UserModal';

const UserList = () => {
    const { userList, isUserDetailsModalOpen, ToggleUserModal } = useContext(
        UserContext
    );

    const columns = ['Name', 'Email Address', 'City', 'State', 'Country'];

    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    };

    return (
        <Fragment>
            <Paper className='user_list__container'>
                <TableContainer>
                    <Table stickyHeader aria-label='sticky table'>
                        <TableHead className='table_header'>
                            <TableRow>
                                {columns.map((column) => {
                                    return (
                                        <TableCell
                                            key={column}
                                            align={'center'}
                                            className='table_header__cell'
                                        >
                                            {column}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {userList.length > 0 &&
                                userList
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((user) => {
                                        const tempUserList = [
                                            user.name.first +
                                                ' ' +
                                                user.name.last,
                                            user.email,
                                            user.location.city,
                                            user.location.state,
                                            user.location.country,
                                        ];
                                        return (
                                            <TableRow
                                                hover
                                                role='checkbox'
                                                tabIndex={-1}
                                                key={user.id.value}
                                                className='table_row'
                                                onClick={() =>
                                                    ToggleUserModal(user, true)
                                                }
                                            >
                                                {tempUserList.map(
                                                    (userDetail, index) => {
                                                        return (
                                                            <TableCell
                                                                key={index}
                                                                align={'center'}
                                                            >
                                                                {userDetail}
                                                            </TableCell>
                                                        );
                                                    }
                                                )}
                                            </TableRow>
                                        );
                                    })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component='div'
                    count={userList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>

            {isUserDetailsModalOpen && <UserModal />}
        </Fragment>
    );
};

export default UserList;
