import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true)
    try{
      const response = await fetch (url);
      const tours = await response.json();
      // console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch(error){
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading){
    return(
      <main>
        <h3>
          <Loading />
        </h3>
      </main>
    )
  }

  if(tours.length === 0){
    return (
      <main className='tours_empty'>
        <h3>No Tours Left</h3>
        <button className='btn_refresh' onClick={() => fetchTours()}>Refresh</button>
      </main>
    )
  }

  return(
    <main className='tours'>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )

  
  
}

export default App;
