import { useState } from 'react'
import './App.css'
import Header from './Components/header/header'
import Main from './Components/main/main'


function App() {
  return (
    <div className='wrapperContainer'>
        <div className='container'>
            <Header/>
            <Main/>
        </div>
    </div>
  )
}

export default App
