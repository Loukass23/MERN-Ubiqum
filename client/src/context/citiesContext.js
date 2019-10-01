import React, { useState, createContext } from 'react'

export const CitiesContext = createContext()


const CitiesContextProvider = (props) => {
    const [cities, setCitiesList] = useState([])

    const getCities = async () => {
        const response = await fetch(`http://localhost:5000/cities/all`);
        const cityList = await response.json();
        console.log('cityList :', cityList);
        setCitiesList({ cityList });
    }
    return (
        <CitiesContext.Provider value={{ cities, getCities }}>
            {props.children}
        </CitiesContext.Provider>
    )
}

export default CitiesContextProvider