import React, { useState } from 'react'

const Tour = ({ id, image, name, price, info, removeTour }) => {
    const [readDataFull, setReadDataFull] = useState(false);

  return (
    <article className='tour_detail'>
        <div>
            <img src={image} alt={name} className="img_tour" />
        </div>
        <footer>
            <div className='tour_name'>
                <h4>{name}</h4>
                <h4 className='tour_price'>${price}</h4>
            </div>
            <div>
                <p className='para_font'>{readDataFull ? info: `${info.substring(0, 200)}...`}
                    <button className='btn_info' onClick={() => setReadDataFull(!readDataFull)}>
                        { readDataFull ? 'show less' : 'read more' }
                    </button>
                </p>
            </div>
            <div className='tours_btn'>
                <button className='btn_tour' onClick={() => removeTour(id)}>not interested</button>
            </div>
        </footer>
    </article>
  )
}

export default Tour