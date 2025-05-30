import './Cart.css'
import React, { useState } from 'react';

const Cart = (props) => {
    const { cart, set_cart } = props;

    const [item, setItem] = useState("");

    let total = 0;

    for (const product of cart) {

        total = total + product.price;
    }

    const clearCut = () => {
        set_cart([]);
    }


    const chooseOne = () => {

        if (cart.length === 0) {

            alert("you didn't choose anything");
            return;
        }

        const index = Math.floor(Math.random() * cart.length);
        setItem(cart[index].name);
    }

    return (
        <div className='cart'>
            <h3>Your Order</h3>

            {
                cart.map((product) => <h5>{product.name}</h5>)
            }
            <p>Seleced Items:{cart.length}</p>
            <p>Total Price:$ {total}</p>

            <button onClick={chooseOne} className='choose-btn'><p>choose one for me</p></button><br />
            <p>random item:{item} </p>

            <button onClick={clearCut} className='choose-btn'><p>choose again</p></button>

        </div>
    );
};

export default Cart;