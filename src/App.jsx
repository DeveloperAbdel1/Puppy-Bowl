/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Routes, Route} from "react-router-dom" // Goes in App.jsx
import './App.css'
import Head from './components/Head'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'



const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A"



// Data fetching is always done in the App.
function App() {
const [playerData, setPlayerData] = useState([]); // Props passed to AllPlayers for what we want the return to 

  useEffect(() => {
    async function fetchAllPlayers() {
        try {
            const response = await fetch(`${BASE_URL}/players`);
            const result = await response.json();
            setPlayerData(result.data.players)

        } catch (error) {
            console.log(error)
        }

    }
    fetchAllPlayers();

  }, [])



  return (
    <>
      <Head/>
  

                              
          <Routes>
             <Route path='/' element={<AllPlayers playerData={playerData}/>} />
             <Route path='/players/:id' element={<SinglePlayer playerData={playerData}/>} />
          </Routes>
        
    </>

 
  )
}

export default App
