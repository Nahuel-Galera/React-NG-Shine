import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from './pages/HomePage.jsx'
import Cliente from './pages/Cliente.jsx'
import Turnos from './pages/Turnos.jsx'
import ServiceDetail from './pages/ServicioDetail.jsx'


const router = createBrowserRouter([
  {
    path:'/React-NG-Shine/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:"//:id",
        element:<ServiceDetail/>
      },
      {
        path:"/cliente",
        element:<Cliente/>
      },
      {
        path:"/turnos",
        element:<Turnos/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
