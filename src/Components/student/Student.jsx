import { Box, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
// import axios from 'axios';
import React, { useState } from 'react'

const Student = () => {
    var [inputs, setInputs] = useState({
        "Admno": '',
        "Name": '',
        "Age": '',
        "Course": 'BCA'
    });
    var[selectedimage,setSelectedimage]=useState(null);

    const inputHandler = (event) => {
        const { name, value } = event.target
        setInputs((inputs) => ({ ...inputs, [name]: value }))
        console.log(inputs)
    }

    const handleImage=(event)=>{
        const file=event.target.files[0];
        setSelectedimage(file)
        inputs.image1=file;
    }
//     const addHandler = () => {
//         console.log("Clicked")
//         console.log(inputs)
//         axios.post("http://localhost:3005/new", inputs)
//             .then((response)=> {
//     alert("record saved")
// })
// .catch(err=>console.log(err))
        

//         }

const savedata=()=>{
    const formdata=new FormData();
    formdata.append('Admno',inputs.Admno);
    formdata.append('Name',inputs.Name);
    formdata.append('Age',inputs.Age);
    formdata.append('Course',inputs.Course);
    formdata.append('image1',selectedimage)
    fetch('http://localhost:3005/new',
    {
        method:'post',
        body:formdata,
    })
    .then((response)=>response.json())
    .then((data)=>{
        alert("record saved")
    })
    .catch((err)=>{
        console.log("error")
    })
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
        <label>Upload file</label>
        <input type="file" onChange={handleImage}></input>
        <br /><br />
       
        <Button variant="contained"onClick={savedata}>Submit</Button>
        
    </div>
)
}

export default Student
