import logo from './logo.svg';
import './App.css';
import { Card, CardContent, CardHeader, Tab ,Tabs, Typography} from '@material-ui/core';
import { useState } from 'react';
import DataFetching from './component/DataFetching';
import UserData from './component/UserData';
import CountryDataFetch from './component/CountryDataFetch'

const Panel = (props)=> (
  <div hidden={props.value !== props.index}>
    <Typography>
      {props.children}
    </Typography>
  </div>
)



function App() {
  
  const [index,setIndex] = useState(0);
  const onTabClicked = (event,index) =>{
    setIndex(index)
  }

  return (
    <div className="App"  >
      <div style={{height:400, backgroundImage: 'url(img/covidbg.png)',backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>

      </div>
      {/* <h1>COVID 19</h1> */}
      
      <div>
      <Tabs variant="fullWidth" value ={index} onChange={onTabClicked} centered>
         <Tab label="Global Coronavirus Information"/>
         <Tab label="User Data"/>
      </Tabs>
      <Panel value={index} index={0}>
        <div>
          
          <div>
            <DataFetching/>
          </div>
          <div>
            <CountryDataFetch/>
          </div>
                 
        </div>
       
            
                
      </Panel>
      <Panel value={index} index={1}>
        
        <div>
          <UserData/>
        </div>
      </Panel>
      </div>
    </div>
    
  );
}

export default App;
