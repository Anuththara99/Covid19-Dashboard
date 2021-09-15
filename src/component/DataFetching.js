import React, {useState,useEffect} from "react"
import axios from "axios"
import { Card, CardContent, CardHeader, Tab ,Tabs, Typography} from '@material-ui/core';



function DataFetching(){



    const [all, setAll] =useState([])
    useEffect(() => {
        axios.get("https://coronavirus-19-api.herokuapp.com/all" )
        .then(res =>
            {
                console.log(res)
                setAll(res.data)
            })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <h2>
                Global Coronavirus Information
            </h2>
            <div style={{marginLeft:150,marginTop:100,paddingLeft:10}}>
            <Card style={{width:300, height:200,float:'left'}}>
                <CardHeader subheader="Global" title="Coronavirus Cases"/>
               
                <CardContent >
                    <Typography variant="body2" color="primary" >
                    {all.cases}
                    </Typography>
                </CardContent>
            </Card>
            <Card style={{width:300, height:200,float:'left'}}>
                <CardHeader subheader="Global" title="Deaths"/>
                <CardContent >
                    <Typography variant="body2" color="primary">
                   {all.deaths}
                    </Typography>
                </CardContent >
            </Card>
            <Card style={{width:300, height:200}}>
                <CardHeader subheader="Global" title="Recovered"/>
                <CardContent >
                    <Typography variant="body2" color="primary">
                    {all.recovered}
                    </Typography>
                </CardContent >
            </Card>
            </div>
               
           
               
           
        </div>
            
        
    )
}

export default DataFetching