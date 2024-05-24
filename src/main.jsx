import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyState from './context/MyState.jsx'
import { Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Add from './Components/Add/Add.jsx'
import Home from "./Components/Home/Home.jsx"
import ItemListComponent from './Components/ItemListComponent/ItemListComponent.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Add />} />
      <Route path='/edit' element={<ItemListComponent />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
  
        <App />
     
    </RouterProvider>
  </React.StrictMode>,
)
