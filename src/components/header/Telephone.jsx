import React from 'react'

import Icon from '../icon/Icon'

const Telephone = ({
  number,
  icon,
  type
}) => {
  return (
    <a href={`tel:${number}`}>
      <Icon type={type} icon={icon} /> {number}
    </a>
  )
}

export default Telephone