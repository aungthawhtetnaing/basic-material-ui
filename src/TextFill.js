import React, { useState } from 'react'
import { Button, TextField,Checkbox,FormControlLabel,FormGroup ,MenuItem ,Select,InputLabel,FormControl} from '@mui/material'
const TextFill = () => {
    const [inputs,setInputs] = useState({
        name:"",
        email:"",
        password:"",
        subscribe: false,
        age: 0
    })

    const handleChange = (e) => {
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(inputs);
    }
  
  return (
    <div>
        <form 
        style={{display:'flex',flexDirection:'column' ,width:700 , margin:"auto"}} onSubmit={handleSubmit}>
        <TextField 
            name='name'
            value={inputs.name} 
            onChange={handleChange} 
            type={'text'} placeholder='name' 
            sx={{margin:3}} 
            variant='outlined'/>
        <TextField 
            name='email'
            value={inputs.email} 
            onChange={handleChange} 
            type={"email"} 
            placeholder='email' 
            sx={{margin:3}}  
            variant='standard'/>
        <TextField 
            name='password'
            value={inputs.password} 
            onChange={handleChange} 
            type={"password"}
            placeholder='password' 
            sx={{margin:3}}  
            variant='filled'/>
        <FormGroup>
            <FormControlLabel 
             sx={{margin:3}} 
            control={
            <Checkbox 
               onChange={()=>
                    setInputs((prev)=>({
                        ...prev,
                        subscribe:!inputs.subscribe,
                    }))}
             />} 
             label="Subscribe New Letters" />
        </FormGroup>

        <FormControl sx={{margin:3}} >
            <InputLabel >Age</InputLabel>
            
            <Select
                name='age'
                value={inputs.age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
           <Button type='submit' variant='contained' color='success' sx={{margin:3}}  >Submit</Button>
        </form>
    </div>
  )
}

export default TextFill