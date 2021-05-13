import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useHistory } from 'react-router';

function Payment() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const element = useElements();

    const [error,setError] = useState(null)
    const [disabled,setDisabled] = useState(true)
    const [ succeeded,setSucceeded] = useState(false)
    const [ processing,setProcessing] = useState('')
    const [clientSecreat,setClientSecreat] = useState('')
    useEffect(() => {
        // generate the special stripe secreat which allows us to charge a customer 
        const getCilentSecret = async () =>{
            const response = await axios ({
                method: 'post',
                url :`/payments/create?total = ${getBasketTotal(basket) * 100}`
            })
            setClientSecreat(response.data.clientSecreat)
        }
        getCilentSecret();
     
    }, [basket])


    const handleSubmit = async(event)=>{
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecreat,{
            card:element.getElement(CardElement)
        }).then(({paymentIntent}) =>{
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false)
            history.replaceState('/orders')
        })

    }
    const handleChange = (event) =>{
        // Listen for  change in the cardElement 
        // and Displayed any errors as the customer types their  card deatis 
        setDisabled(event.empty);
        setError(event.error ? event.error.message:"");

    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    checkout(
                    
                        <Link to="/checkout"> {basket?.length} items </Link>
                    )
                    Total : ${getBasketTotal(basket)} 
                </h1>

                {/* payment _section - delivery address  */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user ? user.email : "guest"}</p>
                        <p> 123 React Lane</p>
                        <p> Pune India</p>
                    </div>

                </div>

                {/* payment _section - Review Items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {/* product in basket  */}
                        {basket.map(item => (
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

                {/* payment _section - Payment methods */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* stripe  */} 
                        <form action="" onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_priceContainer">
                                <h3>Order Total: ${getBasketTotal(basket)}  </h3>
                                <button disabled={processing || disabled || succeeded}> <span> {processing? <p>Processing</p>:"Buy Now"}</span></button>
                            </div>
                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
