import { useState } from 'react'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Table } from './components/Table'
import { Fixture } from './components/Fixture'
import { Footer } from './components/Footer'
//import { fetchFixtures } from './lib/fetchData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { data } from './lib/testData'
import './App.css'

function App() {
  /*const [fixtures, setFixtures] = useState(data);
  const fetchData = async () => {
    const data = await fetchFixtures()
    setFixtures(data)
    console.log(fixtures)
  }

  useEffect(() => {
    fetchData()
  },[])*/

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
      <Footer />
      
    </div>
  )
}

export default App
