import React from 'react'
import { Card, CardContent, CardHeader, Tab ,Tabs, Typography} from '@material-ui/core';
import Form  from './Form';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';


function UserData(){


    return(
        <div>
            <Card style={{width:500, height:400,marginLeft:100,marginTop:100,float:'left'}}>
                <CardHeader  title="Add Data"/>
                <CardContent >
                    <Typography variant="body2" color="textSecondary">
                    <Form/>
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