import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import "./FavoriteProduct.css"
import { useStateValue } from './StateProvider';

// for this page checkoutProduct css are apply 
function FavoriteProduct({id,image,title,price,rating}) {
    const [{favBasket}, dispatch] = useStateValue();  
    const removeFromFavorite = () =>{
        dispatch ({
            type:"REMOVE_FROM_FAV",
            id:id,
        })
    }
    return (
        <div>
            <HighlightOffIcon className="remove" onClick ={removeFromFavorite}/>
        <div className="checkoutProduct" key={id}>
        <img className="checkoutProduct_image" src={image} alt=""/>
        <div className="checkoutProduct_info" >
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating).fill().map(i =>(
                    <p>⭐</p>
                    ))}
            </div>
            {/* <button onClick={removeFromBasket}>Remove from Basket</button> */}
                 
        </div>
    </div>
    </div>
    )
}

export default FavoriteProduct
