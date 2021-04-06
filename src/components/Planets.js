import React from 'react';
import {QueryClient,QueryClientProvider, useQuery} from 'react-query';
import Planet from '../components/Planet';

const queryClient = new QueryClient();

const url = 'https://cors-anywhere.herokuapp.com/http://swapi.dev/api/planets';
const urrl = 'http://swapi.dev/api/planets';
const proxyurl = "https://sheltered-headland-14246.herokuapp.com/"

const fetchPlanets = async() => {
    const res = await fetch( proxyurl+urrl, {
        method:'GET',
       /*  headers: {
           'Access-Control-Allow-Origin': 'http://localhost:3000/',
           // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            // 'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin'
            mode:'cors'
        } */
    } );
    return res.json();
}


const Planets = () => {
   const{data, status} = useQuery('planets', fetchPlanets);
    console.log(data);

    return ( 
        <div>
            <h2>Planets</h2>
            <p>{status}</p>
            {status === 'loading' && (
                <div>Loading Data ....</div>
            )}
            {status === 'error' && (
                <div>Error Fetching Data....</div>
            )}
            {status === 'success' && (
                <div>
                    {data.results.map(planet => <Planet key={planet.name} planet={planet}/>)}
                </div>
            )}
            
        </div>
     );
}
 
export default function Wraped(){
    return(<QueryClientProvider client={queryClient}>
            <Planets/>
        </QueryClientProvider>
    );
}    