import React from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter';
import Cart from './Cart';
import './App.css';

const items = [
  { id: 1, name: 'Taco Seasoning', price: 2.25, qty: 2 },
  { id: 2, name: 'Pinto Beans', price: 1.89, qty: 3 },
  { id: 3, name: 'Sour Cream', price: 3.50, qty: 1 },
]

function App() {
  return (
    <div className="App">
      <Cart initialItems={items} />
      <Counter />
      <Navbar />
      <Greeter name="Jake" age="20" excitement_level={8} />
      <h1>Hello, world!</h1>

    </div>
  );
}

export default App;
// Working from this link: left off at 1hr and 20 min
// https://www.youtube.com/watch?v=9U3IhLAnSxM&t=2217s