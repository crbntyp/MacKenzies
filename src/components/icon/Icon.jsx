import React from 'react'

const Icon = ({
  icon,
  type
}) => {
  return (
    <i className={`${type} la-${icon}`}></i>
  )
}

export default Icon