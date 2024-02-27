//import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Table } from './components/Table'
import { Fixture } from './components/Fixture'
import { Footer } from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useFetch } from './Hooks/useFetch'
import './App.css'


function App() {
  /*const [fixtures, setFixtures] = useState(data);
  const fetchData = async () => {
    const data = await fetchFixtures('fixtures', 'live=all')
    setFixtures(data)
  }
  useEffect(() => {
    fetchData()
  },[])*/

  const { data, loading, error} = useFetch("fixtures", "live=all")
  
  if (!data) {
    return null;
  }

  console.log(data)

  return (
    <div >
      <Navbar />
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Table data={data} loading={loading} error={error}/>}></Route>
           <Route path='/fixtures/:matchID' element={<Fixture data={data} loading={loading} error={error}/>}></Route> 
        </Routes> 
      
      </BrowserRouter> 
      <Footer />
      
    </div>
  )
}

export default App
