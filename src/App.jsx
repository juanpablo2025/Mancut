import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Contenido from "./components/contenido"
import Barbero from "./components/Barbero"
import Cliente from "./components/Cliente"
import Producto from "./components/Producto"



const router = createBrowserRouter([

  {
    path: '/',
    element: <Contenido />
  },
  {
    path: '/ContenidoBarbero',
    element: <Barbero />
  },
  {
    path: '/ContenidoAgregarCliente',
    element: <Cliente />
  },
  {
    path: '/ContenidoAgregarProducto',
    element: <Producto />
  },

])



function App() {


  return (
    <RouterProvider router={router} /> 
  )
  
}

export default App
