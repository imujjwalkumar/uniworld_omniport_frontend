export const setSelectedCategory =(payload)=>{
  return {
    type: "setSelectedCategory",
    payload: payload,
  }
}

  
export const handleAddToCart =(payload)=>{
  return {
    type: "handleAddToCart",
    payload: payload,
  }
}

export const handleRemoveFromCart =(payload)=>{
  return {
    type: "handleRemoveFromCart",
    payload: payload,
  }
}

  