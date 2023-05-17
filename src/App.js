import React from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greeter name="Jake" age="20" excitement_level={9} />
      <h1>Hello, world!</h1>
   
    </div>
  );
}

export default App;
