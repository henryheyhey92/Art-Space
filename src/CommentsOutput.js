import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#2196f3",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default class CommentsOutput extends React.Component {
    state = {

    }

    retrieveDate(data) {
        let date = new Date(data)
        return date.toLocaleDateString()
    }

    renderComment = () => {
        let data = this.props.commentData
        return data.map(event => {
            return (
                <StyledTableRow key={event._id}>
                    <StyledTableCell component="th" scope="row">
                        {event.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{event.comment}</StyledTableCell>
                    <StyledTableCell align="center">{this.retrieveDate(event.last_time_stamp)}</StyledTableCell>
                </StyledTableRow>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 'sx' }} aria-label='customized table'>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="center">Comment</StyledTableCell>
                                <StyledTableCell align="center">Comment Date</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderComment()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
        )
    }
}