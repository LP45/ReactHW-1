import React from 'react'
import Sidebar from './Sidebar';
import Data from './Data';
import Website from './Website';
import './App.css'
class App extends React.Component{

  render(){
    return(
     <div className="project">
       <Sidebar/>
       <Data />
       <Website />
     </div>

    )
  }
}

export default App;

