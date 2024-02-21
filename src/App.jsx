import { useState } from 'react'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Table } from './components/Table'
import { Fixture } from './components/Fixture'
//import { fetchFixtures } from './lib/fetchData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { data } from './lib/testData'
import './App.css'

function App() {

  /*const fetchData = async () => {
    const fixtures = await fetchFixtures()
    console.log(fixtures)
  }

  useEffect(() => {
    fetchData()
  })*/ 

  console.log(data)

  return (
    <div >
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Table data={data} />}></Route>
          <Route path='/fixtures/:matchID' element={<Fixture data={data} />}></Route>
        </Routes> 
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
