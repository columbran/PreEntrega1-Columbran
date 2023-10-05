import { createContext, useContext, useState } from "react";

export const CartContext = createContext ([])   

export const useCartContext = () => useContext(CartContext) 

export const CartContextProvider = ({ children }) => {
     
    const [cartList, setCartList] = useState ([])

    const addProduct = (newProduct) => {

      const idx = cartList.findIndex(product => product.id === newProduct.id)

      if (idx != -1) {

        cartList [idx].quantity = cartList [idx].quantity + newProduct.quantity
        setCartList ([... cartList])
      } else {
        setCartList ( [ ...cartList, newProduct])
      }
    } 



    const totalQuantity = () => cartList.reduce ((count, objProduct ) => count += objProduct.quantity, 0)

    const totalPrice = () => cartList.reduce ((count, objProduct ) => count += (objProduct.quantity * objProduct.price), 0)

    const removeItem = id => setCartList (cartList.filter (product => product.id !== id))

   
  
  const deleteCart = () => {
    setCartList ([])
  }

  

    return (
      <CartContext.Provider value={{
        cartList,
        addProduct,
        deleteCart,
        totalQuantity,
        totalPrice,
        removeItem
        
      }}>
        { children }
      </CartContext.Provider>  
    )
}