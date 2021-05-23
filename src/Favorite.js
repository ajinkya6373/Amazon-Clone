import React from 'react'
import FavoriteProduct from './FavoriteProduct';
import { useStateValue } from './StateProvider';
import './Favorite.css'


// for this page chaeckout css added 
function Favorite() {
    const [{favBasket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
        <div className="checkout_left">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPantry/MAY/PBFest/SF-Header_1550-X-300_Shop.gif"alt="" className="checkout_ad"/>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/April21/Bankoffer/Pantry_HDFCV2_PC.jpg"alt="" className="checkout_ad"/>
            <div>
                <h3>"Hello" {user?user.email:"Guest"}</h3>
                <h2 className="checkout_titile">
                    your Favorite Products
                </h2>
                {favBasket.map(item=>(
                    <FavoriteProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>

    </div>
    )
}

export default Favorite
