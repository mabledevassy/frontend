import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Studentedit from './Studentedit';
import { Buffer } from 'buffer';

const Studentdetails = () => {
    var [selected, setSelected] = useState();
    var [update, setUpdate] = useState(false);
    var [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3005/view")
            .then(response => {
                console.log("dkjhdg")
                setStudent(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const updateValues = (row) => {
        setSelected(row)
        setUpdate(true)
    }
    var result =
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Admission no</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Age</TableCell>
                            <TableCell >Course</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {student.map((row, pos) => {
                            return (

                                <TableRow key={pos}

                                >
                                    <TableCell >{row.Admno}</TableCell>
                                    <TableCell >{row.Name}</TableCell>
                                    <TableCell>{row.Age}</TableCell>
                                    <TableCell >{row.Course}</TableCell>
                                    <TableCell>
         <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`} width="50" height="50" alt="Error" />

                                    </TableCell>
                                    <TableCell><EditIcon onClick={() => updateValues(row)} /></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    if (update)
        result = <Studentedit data={selected} method='put' />
    return (result)
}

export default Studentdetails
