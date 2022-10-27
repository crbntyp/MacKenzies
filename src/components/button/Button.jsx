import React from 'react'

const Button = ({
  text,
  context = 'primary',
  size,
  buttonOnClick
}) => {
  return (
    <button className={`btn btn--${context} ${size ? `btn--${size}` : ''}`} onClick={buttonOnClick}>
      {text}
    </button>
  )
}

export default Button