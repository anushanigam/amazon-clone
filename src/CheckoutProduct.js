import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removefrombasket = () => {
        dispatch({
            type: 'remove_from_basket',
            
        })
    }
    
    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct_image' src={image} />
            
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}
                </p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price} </strong>
                </p>
            
            <div className="checkoutProduct_rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                ))}
                    
            </div>
            <button onClick="{removefrombasket">Remove from Basket</button>
            </div>
        </div>

    )
}

export default CheckoutProduct
