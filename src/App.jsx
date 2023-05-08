
import Menu from "./components/menu"








import Barbero from "./components/contenidoBarbero"
import Cliente from "./components/contenidoCliente"
import Producto from "./components/contenidoProducto"



// const router = createdBrowserRouter([

//   {
//     path: '/',
//     element: <Contenido />
//   },
//   {
//     path: '/ContenidoBarbero',
//     element: <Barbero />
//   },
//   {
//     path: '/ContenidoAgregarCliente',
//     element: <Cliente />
//   },
//   {
//     path: '/ContenidoAgregarCliente',
//     element: <Producto />
//   },

// ])



function App() {


  return (
    <div className="App">
      <Menu />
      <Barbero />

      <Cliente />
      <Producto />

      {/* <RouterProvider router={router} /> */}

    </div>
  )
}

export default App
