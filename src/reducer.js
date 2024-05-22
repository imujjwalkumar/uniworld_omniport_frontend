const initialState = {
    selectedCategory: 'All',
    cart:{}
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'setSelectedCategory':
        return {
          ...state,
          selectedCategory: action.payload
        };
      case 'handleAddToCart':
          var {id,price,name,category}= action.payload

        return {
          ...state,
          cart: {...state.cart, [id]:{price,name,category}  }
        };
        case 'handleRemoveFromCart':
          var {id}= action.payload
          delete state.cart[id]
        return {
          ...state,
          cart: {...state.cart}
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  