import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'

function Form(){

    //array of case objects
    const [covidCases,setCovidCases] =useState([])

    //input field states 
    const [email,setEmail]=useState('');
    const [country,setCountry]=useState('');
    const [newCases,setNewCases]=useState('');
    const [totCases,setTotCases]=useState('');
    const [totDeaths,setTotDeaths]=useState('');

    //form submit event
    const handleAddCases=(e)=>{
        e.preventDefault();
        //creating an object
        let covidCase = {
            email,
            country,
            newCases,
            totCases,
            totDeaths
        }

        setCovidCases([...covidCases,covidCase])
        setEmail('');
        setCountry('');
        setNewCases('');
        setTotCases('');
        setTotDeaths('');
    }

    //saving data to local storage
    useEffect(()=>{
        localStorage.setItem('covidCases',JSON.stringify(covidCases))
    },[covidCases])

    
        return(
            <div>
                <form onSubmit={handleAddCases} >
                    <TextField id="outlined-basic" value={email} label="User Email" 
                    onChange ={(e)=>setEmail(e.target.value)}
                    variant="outlined" style={{marginLeft:5}}/>
                    <TextField id="outlined-basic" label="Country" variant="outlined" 
                    onChange ={(e)=>setCountry(e.target.value)} style={{marginLeft:5}} />
                    <br/>
                    <TextField id="outlined-basic" label="No of new cases" variant="outlined" 
                    onChange ={(e)=>setNewCases(e.target.value)} style={{marginTop:10}} />
                    <br/>
                    <TextField id="outlined-basic" label="No of total cases " variant="outlined"
                    onChange ={(e)=>setTotCases(e.target.value)} style={{marginTop:5}}/>
                    <br/>
                     <TextField id="outlined-basic" label="No of total deaths" variant="outlined"
                     onChange ={(e)=>setTotDeaths(e.target.value)} style={{marginTop:5}} />
                    <br/>
                    <Button type="submit" variant="contained" color="secondary">
                        Save
                    </Button>
                </form>
            </div>
        )
    
    

}

export default Form