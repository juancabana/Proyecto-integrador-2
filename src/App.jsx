// import './App.css';
import React, {Component} from 'react';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';




class App extends Component{ 
    render(){
        return (
            <div className="App">
                <Login/>
                {/* <Home/> */}
            </div>
          );
    }
}

export default App;
