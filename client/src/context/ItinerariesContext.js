import React, { useState, createContext } from 'react'

export const ItinerariesContext = createContext()


const ItinerariesContextProvider = (props) => {
    const [itineraries, setItinerariesList] = useState([])

    const getItineraries = async () => {
        const response = await fetch(`http://localhost:5000/itineraries/all`);
        const itinerariesList = await response.json();
        console.log('itinerariesList :', itinerariesList);
        setItinerariesList({ itinerariesList });
    }
    return (
        <ItinerariesContext.Provider value={{ itineraries, getItineraries }}>
            {props.children}
        </ItinerariesContext.Provider>
    )
}

export default ItinerariesContextProvider