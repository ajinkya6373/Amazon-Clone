import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal"

function Checkout() {

    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"alt="" className="checkout_ad"/>
                <div>
                    <h3>"Hello" {user?user.email:"Guest"}</h3>
                    <h2 className="checkout_titile">
                        Your shopping Basket
                    </h2>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout
