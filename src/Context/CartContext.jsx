import { createContext, useContext, useState } from "react";

export const CartContext = createContext ([])   

export const useCartContext = () => useContext(CartContext) 

export const CartContextProvider = ({ children }) => {
     
    const [cartList, setCartList] = useState ([])

    const addProduct = (newProduct) => {

      const idx = cartList.findIndex(producto => producto.id === newProduct.id)

      if (idx != -1) {

        cartList [idx].quantity = cartList [idx].quantity + newProduct.quantity
        setCartList ([... cartList])
      } else {
        setCartList ( [ ...cartList, newProduct])
      }
    } 



    const totalQuantity = () => cartList.reduce ((count, objProducto ) => count += objProducto.quantity, 0)

    const totalPrice = () => cartList.reduce ((count, objProducto ) => count += (objProducto.quantity * objProducto.precio), 0)

    const removeItem = id => setCartList (cartList.filter (producto => producto.id !== id))

    // const addProduct = (newProduct) =>{

    //     setCartList ([
    //         ...cartList,
    //         newProduct

    //     ])
    // }
  
  const deleteCart = () => {
    setCartList ([])
  }

  // const removeProduct = (productId) => {
  //   Filtra la lista de productos para eliminar el producto con el ID correspondiente
  //   const updatedCartList = cartList.filter((product) => product.id !== productId);
    
  //   Actualiza el estado del carrito con la nueva lista filtrada
  //   setCartList(updatedCartList);
  // };

    return (
      <CartContext.Provider value={{
        cartList,
        addProduct,
        deleteCart,
        totalQuantity,
        totalPrice,
        removeItem
        // removeProduct
      }}>
        { children }
      </CartContext.Provider>  
    )
}