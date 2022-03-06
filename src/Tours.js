import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section className='section_tours'>
        <div className='tours_head'>
            <h2 className='tours_title'>our tours</h2>
            <div className="underline"></div>
        </div>
        <div className='tours_data'>
            { tours.map((tour) => {
                return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
            }) }
        </div>
    </section>
  )
}

export default Tours;