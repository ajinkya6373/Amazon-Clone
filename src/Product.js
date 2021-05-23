
import "./Product.css"
import { useStateValue } from './StateProvider'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function Product({ id, title, image, price, rating }) {
    const [{basket,favBasket},dispatch] = useStateValue();
    // console.log("This is the basket >>" ,basket)
    const addToBasket = () =>{
        // dispatch the item into data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    const addToFav = () =>{
        // dispatch the item into data layer
        dispatch({
            type:'ADD_TO_FAV',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }

    return (
        <div className="product" id={id}>
              < FavoriteBorderIcon className="favItem" onClick={addToFav}/>
            <div className="product_info">
                <p>{title}</p>
                <div className="product_info">
                    <p className="product_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">
                        {Array(rating).fill().map(i => (
                            <p>⭐</p>
                        ))}

                    </div>
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
