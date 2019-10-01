import React, { useContext, useEffect } from 'react'
import { ItinerariesContext } from '../context/ItinerariesContext';
import MediaCard from '../components/MediaCard';
import { Grid } from '@material-ui/core'



const Itineraries = () => {
    const { itineraries, getItineraries } = useContext(ItinerariesContext)

    useEffect(() => { getItineraries() }, []);
    useEffect(() => {
        console.log('itineraries :', itineraries);
    }, [itineraries])

    const { itinerariesList } = itineraries
    return (
        <Grid container spacing={8}>

            {itinerariesList && itinerariesList.map(itineraries => {
                return (
                    <Grid height='250px' key={itineraries.title} item xs={12} sm={4}>
                        <MediaCard title={itineraries.title} subtitle={itineraries.city} img={itineraries.img} />
                    </Grid>

                )
            })}

        </Grid>
    )
}

export default Itineraries
