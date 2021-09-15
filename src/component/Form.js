import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

function Form(){

        return(
            <div>
                <form  >
                    <TextField id="outlined-basic"  label="User Email" variant="outlined" style={{marginLeft:5}}/>
                    <TextField id="outlined-basic" label="Country" variant="outlined" style={{marginLeft:5}} />
                    <br/>
                    <TextField id="outlined-basic" label="No of new cases" variant="outlined" style={{marginTop:10}} />
                    <br/>
                    <TextField id="outlined-basic" label="No of total cases " variant="outlined" style={{marginTop:5}}/>
                    <br/>
                     <TextField id="outlined-basic" label="No of total deaths" variant="outlined" style={{marginTop:5}} />
                    <br/>
                    <Button variant="contained" color="secondary">
                        Save
                    </Button>
                </form>
            </div>
        )
    
    

}

export default Form