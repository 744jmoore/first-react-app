import React from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Navbar/>
      <Greeter name="Jake" age="20" excitement_level={8} />
      <h1>Hello, world!</h1>
   
    </div>
  );
}

export default App;
// Working from this link: left off at 1hr and 20 min
// https://www.youtube.com/watch?v=9U3IhLAnSxM&t=2217s