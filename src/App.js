import { useState, useEffect } from 'react'

import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'



function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  // Use Async await here with fetch for the NASA API
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      // Destructure here to just pull targeted information we need, in this case, just events
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)

    }

    fetchEvents()
    // Add dependency array as 2nd argument below, it will be set as empty

    console.log(eventData);
  }, [])

// Create a loading expression
  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;
