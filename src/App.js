import React , {useState} from 'react'
import Navbar from './components/Navbar';
import Planets from './components/Planets'
import People from './components/People';
import {QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

function App() {
    const [page, setPage] = useState('planets');

    // const express = require("express")
    // const app = express()
    // const cors = require("cors")

    // app.use(cors())

  return (
    <>
    
      <div className="App">
        <h1>Star wars Info</h1>
        <Navbar setPage={setPage}/>
        <div className="content">
          {           
          page === 'planets'? <Planets/> : <People/>
          }
        </div>
      </div>
    
      <ReactQueryDevtools />
    </>
  )
}

//export default App;

export default function Wraped(){
  return(<QueryClientProvider client={queryClient}>
          <App/>
      </QueryClientProvider>
  );
} 
