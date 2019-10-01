import React, { useContext, useEffect } from 'react'
import { CitiesContext } from '../context/CitiesContext';
import MediaCard from '../components/MediaCard';
import { Grid } from '@material-ui/core'



const Cities = () => {
    const { cities, getCities } = useContext(CitiesContext)

    useEffect(() => { getCities() }, []);
    useEffect(() => {
        console.log('cities :', cities);
    }, [cities])

    const { cityList } = cities
    return (

        <Grid container spacing={4}>

            {cityList ? cityList.map(city => {
                return (
                    <Grid height='250px' key={city.name} item xs={12} sm={4}>
                        <MediaCard title={city.name} subtitle={city.country} img={city.img} />
                    </Grid>

                )
            })
                :
                (<h1>Loading</h1>)}
        </Grid>

    )

}

export default Cities
