import React from 'react'
import { Card, CardContent, CardHeader, Tab ,Tabs, Typography} from '@material-ui/core';
import { TextField } from '@material-ui/core';

function UserData(){

    return(
        <div>
            <Card style={{width:500, height:400,marginLeft:100,marginTop:100,float:'left'}}>
                <CardHeader  title="Add Data"/>
                <CardContent >
                    <Typography variant="body2" color="textSecondary">
                    <form  >
                        <TextField id="outlined-basic" label="User Email" variant="outlined" style={{marginLeft:5}}/>

                        <TextField id="outlined-basic" label="Country" variant="outlined" style={{marginLeft:5}} />
                        <br/>
                        <TextField id="outlined-basic" label="No of new cases" variant="outlined" style={{marginTop:10}} />
                        <br/>
                        <TextField id="outlined-basic" label="No of total cases " variant="outlined" style={{marginTop:5}}/>
                        <br/>
                        <TextField id="outlined-basic" label="No of total deaths" variant="outlined" style={{marginTop:5}} />
                        <br/>
                    </form>
                    </Typography>
                </CardContent>
            </Card>
            <Card style={{width:500, height:400,marginLeft:50,marginTop:100,float:'left'}}>
                <CardHeader  title="View Data"/>
                <CardContent >
                    <Typography variant="body2" color="textSecondary">
                    lkytd
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserData