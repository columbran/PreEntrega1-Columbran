import { useState } from 'react'


import NavBar from './componentes/Navbar/NavBar'
import Titulo from './componentes/Titulo/ItemListContainer'
import Footer from './componentes/Footer/Footer'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';












function App() {
  return (
    <div>
     {/* {Navbar()} */}
     <NavBar />
     <Titulo greeting='bienvenido a mi app' subtitulo='el subtitulo de mi tienda'/>
     <Footer />
    </div>
   
  )
}

export default App
