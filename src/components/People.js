import React from 'react';
import {QueryClient,QueryClientProvider, useQuery} from 'react-query';
import Person from '../components/Person';

const queryClient = new QueryClient();

const url = 'https://cors-anywhere.herokuapp.com/http://swapi.dev/api/people';
const urrl = 'http://swapi.dev/api/people';
const proxyurl = "https://sheltered-headland-14246.herokuapp.com/"

const fetchPeople = async() => {
    const res = await fetch( proxyurl + urrl, {
        method:'GET'
    } );
    return res.json();
}


const People = () => {
   const{data, status} = useQuery('people', fetchPeople);
    console.log('people '+ data);

    return ( 
        <div>
            <h2>People</h2>
            <p>{status}</p>
            {status === 'loading' && (
                <div>Loading people Data ....</div>
            )}
            {status === 'error' && (
                <div>Error Fetching people Data....</div>
            )}
            {status === 'success' && (
                <div>
                    {data.results.map(person => <Person key={person.name} person={person}/>)}
                </div>
            )}
            
        </div>
     );
}
 
export default function Wraped(){
    return(<QueryClientProvider client={queryClient}>
            <People />
        </QueryClientProvider>
    );
}    