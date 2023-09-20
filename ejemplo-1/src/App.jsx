import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reloj from './Ejercicio2/Reloj'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Navbar} from './Ejercicio4.1/Navbar';
import  { Main1 }  from './Ejercicio4.1/Main1';
import { Main2 } from './Ejercicio4.1/Main2';
import { Contador } from './Ejercicio5/Contador'
import CharacterList from './Ejercicio6/CharacterList'





function App() {
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Contador/>
        
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/hola' element={<Main1/>} />
            <Route path='/chau' element={<Main2/>} />
          </Routes>
        </BrowserRouter>

      </div>
      <CharacterList/>
      <Reloj />
    </>
  )
}

export default App
