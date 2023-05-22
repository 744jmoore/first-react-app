import React from 'react';
import CartItem from './CartItem';

function Cart({ initialItems }) {
    const grandTotal = initialItems.reduce((total, item)=>(
        total + item.qty * item.price
    ), 0).toFixed(2)
    return (
        <div className='Cart'>
            <h1>I am cart</h1>
            <div className="Cart-items">
                {initialItems.map(item => (
                    <CartItem key={item.id} {...item} />
                    // <li>
                    //     Name: {item.name}, {item.price}
                    // </li>
                ))}
            </div>
            <h2>Grand Total: ${grandTotal} </h2>
        </div>
    )
}
export default Cart;

// https://www.youtube.com/watch?v=9U3IhLAnSxM
// 1:40.22