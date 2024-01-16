import { Icon } from '@iconify/react'
import React from 'react'

const FlightNotFound = ({ search }) => {
    return (
        <div className="flight-loaderr wf-100">
           
            <div className="container">
            <div className='noflight mb-4'>
                <img src='/images/airport-noflight.jpg' />
            </div>
                <h4 className='mb-4'>
                    No Flights Available
                </h4> 
                <p className='mb-0'>Sorry, No results were found, Try changing your travel dates and search again..</p>
                <h6 className='ver-2'>
                    {search.originAirport} <Icon icon="tdesign:swap" className='swap' /> {search.destinationAirport}
                </h6>
                <h5 className='ver-2 mt-3 mb-0'>Modify your flights search</h5>

            </div>
        </div>
    )
}

export default FlightNotFound