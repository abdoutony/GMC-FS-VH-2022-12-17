const initialState = {
    cart : [],
    totalAmount : 0,
    totalElement : 0,
  };
  
  // reducer
  const CartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    // payload:{
    //     id:,
    //     title:"",
    // }
    switch (type) {
      case "ADDTOCART":
        state.totalElement += 1
        
        const isItem = state.cart.find(el=> el.id=== payload.id)
        if (isItem){
            state.totalAmount += (payload.price * isItem.quantity)
            return {...state, cart: state.cart.map(el=>{
                if(el.id === payload.id){
                    return {...el, quantity : el.quantity +1}
                }
                else{
                    return el
                }
            })}
            
        }

        else {
            state.totalAmount += payload.price * 1
            return {...state, cart: [...state.cart, {...payload, quantity : 1}]}
        }
      case "INCREMENT":
        state.totalElement += 1
        state.totalAmount += payload.price 
        return { ...state, cart: state.cart.map(el=>{
            if(el.id === payload.id){
                return {...el, quantity : el.quantity + 1}
            }
            else {
                return el
            }
        })  };
        case "DECREMENT":        
            state.totalElement -= 1
            state.totalAmount -= payload.price
            const isItemDecrement = state.cart.find(el=> el.id=== payload.id)
            if(isItemDecrement.quantity === 1){
                return {...state, cart : state.cart.filter(el=>el.id !== payload.id)}
            }else {
                return { ...state, cart: state.cart.map(el=>{
                    if(el.id === payload.id){
                        return {...el, quantity : el.quantity - 1}
                    }
                    else {
                        return el
                    }
                })  };
            }
      default:
        return state;
    }
  };
  
  export default CartReducer;