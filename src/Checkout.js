import { ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider"



function Checkout() {
    
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad/2019/FA/GW/3PA_Phase3/ENGPC5.png"/> 
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    {/*Basket */}
                    {/*Basket */}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
                

            </div>
            
        </div>
    );
}

export default Checkout
