export const initialState = {
    basket:[],
    favBasket:[],
    user: null
}
//this set total price of items
export const getBasketTotal = (basket) =>
   basket?.reduce((amount,item)=>item.price + amount,0);

 const reducer = (state,action) => {
    //  console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item],
            }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                 (basketItem) =>basketItem.id ===action.id
                 
            );
            let newBasket = [...state.basket];
            if(index>=0){
                newBasket.splice(index,1);
                // console.log(state)
                // console.log(action.id)

            }else{
                console.warn(`Cant remove product (id:${action.id}) as it's not in basket!`)
            }
            return{
                ...state,
                basket:newBasket
            }
        case "ADD_TO_FAV":{
            return {
                ...state,
                favBasket:[...state.favBasket,action.item]
            }
        }
        case "REMOVE_FROM_FAV":{
            const index = state.favBasket.findIndex(
                (basketItem) =>basketItem.id ===action.id
                
           );
           let newFavBasket = [...state.favBasket];
           if(index>=0){
            newFavBasket.splice(index,1);
           }else{
               console.warn(`Cant remove product (id:${action.id}) as it's not in Favbasket!`)
           }
           return{
               ...state,
               favBasket:newFavBasket
           }
        }
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
           
        default:
            return state;
    }
};
export default reducer;


