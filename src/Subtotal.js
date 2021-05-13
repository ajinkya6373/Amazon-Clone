import React, { useState } from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();    

    return (
        <div className="subtotal" >
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            subtotal ({basket?.length} items):<strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />
                        This order contains a gift
                    </small>
                    </>
                )}
                
                value={getBasketTotal(basket)}
                
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'} />
            <button onClick={e=>history.push('/payment')} >Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal
