import React, { useState, createContext } from 'react'

export const CitiesContext = createContext()


const CitiesContextProvider = (props) => {
    const [cities, setCities] = useState([
        {
            name: "Amsterdam",
            country: "Netherland",
            img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1559669413/MERN/20170624_104816.jpg",
        },
        {
            name: "Amsterdam",
            country: "Netherland",
            img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1559669413/MERN/20170624_104816.jpg",
        },

    ])
    return (
        <CitiesContext.Provider value={{ cities }}>
            {props.children}
        </CitiesContext.Provider>
    )
}

export default CitiesContextProvider