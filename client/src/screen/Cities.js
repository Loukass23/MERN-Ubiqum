import React, { useContext, useEffect } from 'react'
import { CitiesContext } from '../context/citiesContext';


const Cities = () => {
    const { cities } = useContext(CitiesContext)

    useEffect(() => {
        console.log('cities :', cities);
    }, [cities])

    return (
        <div>

        </div>
    )
}

export default Cities
