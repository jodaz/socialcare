import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from '@material-ui/core'
import EditButton from './EditButton';

const useStyles = makeStyles(theme => ({
    root: {
        border: 'none'
    },
    user: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    tHeadCell: {
        fontWeight: 600,
        color: theme.palette.info.dark,
        textTransform: 'uppercase'
    },
    tBodyColumn: {
        padding: '0 0.1rem',
        [theme.breakpoints.up('sm')]: {
            padding: '0 1rem'
        }
    },
    tbodyRow: {
        margin: '1rem',
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.12)",
        borderRadius: '6px'
    },
    position: {
        padding: '0.8rem',
        fontWeight: 700,
        color: theme.palette.info.dark,
        fontSize: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '1px 0px 1px rgba(0, 0, 0, 0.12)'
    },
    fullWidth: {
        width: '100%'
    }
}));

export default function Datagrid({ data }) {
    const classes = useStyles();
    const isSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    )

    const renderRows = () => (
        <>
            {data.map((row, i) => (
                <TableRow key={i} className={classes.tbodyRow}>
                    <TableCell align="left" className={classes.tBodyColumn}>
                        <Box className={classes.position}>
                            {row.name}
                        </Box>
                    </TableCell>
                    <TableCell align="center" className={classes.tBodyColumn}>
                        <EditButton href={`/categories/${row.id}/edit`} />
                    </TableCell>
                </TableRow>
            ))}
        </>
    )

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            className={classes.tHeadCell}
                            align="left"
                        >
                            Nombre
                        </TableCell>
                        <TableCell
                            className={classes.tHeadCell}
                            align="center"
                        >
                            Acciones
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(data.length)
                        ? renderRows()
                        : (
                        <TableRow className={classes.tbodyRow}>
                            <TableCell align="center" colSpan={5}>
                                Sin registros
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}