import { Button, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
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
        if(props.method==='put')
        {
            console.log("bvhxcbvhc")
            axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
            .then(response=>{
                alert("Record updated")
                console.log("post data"+response.data)
                window.location.reload(false);
            })
            .catch(err=>console.log(err))
        }
    }
  return (
    <div>
      <TextField label="Admission number" name="Admno" variant="outlined" value={inputs.Admno} onChange={inputHandler} /><br /><br />
        <TextField label="Name" name="Name" variant="outlined" value={inputs.Name} onChange={inputHandler} /><br /><br />
        <TextField label="Age" name="Age" variant="outlined" value={inputs.Age} onChange={inputHandler} /><br /><br />
        <InputLabel id="demo-simple-select-label">Course</InputLabel>
        <Select
            labelId="demo-simple-select-label" name="Course" value={inputs.Course} onChange={inputHandler}>
            <MenuItem value={"BCA"}>BCA</MenuItem>npm start

            <MenuItem value={"BCOM"}>BCOM</MenuItem>
            <MenuItem value={"BBA"}>BBA</MenuItem>
        </Select><br /><br />
        <Button variant="contained"onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default Studentedit
