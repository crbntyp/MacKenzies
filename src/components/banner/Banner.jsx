import React from 'react'

import Button from '../button/Button'

const Banner = ({
  heading,
  subHeading,
  buttonText
}) => {
  return (
    <section className='banner'>
      <artice>
        <h1>{heading}</h1>
        <p>{subHeading}</p>
        <Button 
          text={buttonText} 
          buttonOnClick={() => alert('clicked')} 
        />
      </artice>
    </section>
  )
}

export default Banner