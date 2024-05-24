import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import MyState from './context/MyState'
import NavBar from './Components/NavBar/NavBar'
import ItemListComponent from './Components/ItemListComponent/ItemListComponent'

function App() {

  return (
    <div>

      <MyState>
        <NavBar/>
        <Outlet />

      </MyState>

    </div>
  )
}

export default App