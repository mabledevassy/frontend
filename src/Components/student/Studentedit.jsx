import axios from 'axios'
import React, { useState } from 'react'

const Studentedit = (props) => {
    var[inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {

        const { name, value } = event.target
        setInputs((inputs) => ({ ...inputs, [name]: value }))
        console.log(inputs)
    }
    const addHandler=()=>{
        if(props.method==="put")
        {
            axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
            .then(response=>{
                alert("Record updated")
                window.location.reload(false);
            })
            .catch(err=>console.log(err))
        }
    }
  return (
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
                        {student.map((row,pos) => {
                            return (

                                <TableRow key={pos}

                                >
                                    <TableCell >{row.Admno}</TableCell>
                                    <TableCell >{row.Name}</TableCell>
                                    <TableCell>{row.Age}</TableCell>
                                    <TableCell >{row.Course}</TableCell>
                                   
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
    </div>
  )
}

export default Studentedit
