import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import NavBar from './componentes/Navbar/NavBar'
import Titulo from './componentes/Titulo/Titulo'
import Footer from './componentes/Footer/Footer'
import Contador from './componentes/Contador/Contador'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'





import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'












function App() {
  return (
    <BrowserRouter>
     
     <NavBar />
   
     <Routes>
     <Route path='/' element={<ItemListContainer />} />
     <Route path='/categoria/:cid' element={<ItemListContainer />} />
     <Route path='/detalle/:pid' element={<ItemDetailContainer />} />
     <Route path='/contador' element={<Contador />} />
     {/* <Titulo greeting='bienvenido a mi app' subtitulo='el subtitulo de mi tienda'/> */}
     
     
     {/* <h3>Contador de Items</h3> */}
     
     </Routes> 


     {/* <Footer /> */}

     

    </BrowserRouter> 

   

  )
}

export default App
