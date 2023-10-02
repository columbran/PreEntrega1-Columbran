import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import NavBar from './componentes/Navbar/NavBar'

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './Context/CartContext';
import CartContainer from './componentes/CartContainer/CartContainer';




function App() {


  return (
    <BrowserRouter>
     
     <CartContextProvider>
     <NavBar />
   
     <Routes>
     <Route path='/' element={<ItemListContainer />} />
     <Route path='/categoria/:cid' element={<ItemListContainer />} />
     <Route path='/detalle/:pid' element={<ItemDetailContainer />} />
     <Route path='/contador' element={<CartContainer />} />
     
     
  
     </Routes> 


     
    </CartContextProvider>
    </BrowserRouter> 

   

  )
}

export default App
