//import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Table } from './components/Table'
import { Fixture } from './components/Fixture'
import { Footer } from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useFetch } from './Hooks/useFetch'
import { dataTest } from './lib/dataTest'
import './App.css'


function App() {
 

  const { data, loading, error} = useFetch("fixtures", "live=all")
  console.log(data)
  
  if (!data) {
    return null;
  }

  return (
    <div >
      <Navbar />
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Table />}></Route>
           <Route path='/fixtures/:matchID' element={<Fixture data={data} loading={loading} error={error} />}></Route> 
        </Routes> 
      
      </BrowserRouter> 
      <Footer />
      
    </div>
  )
}

export default App
