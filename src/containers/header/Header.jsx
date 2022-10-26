import React from 'react'

import { MainNav, Telephone, Logo } from '../../components'

const Header = () => {
  return (
    <header style={{'display': 'flex'}}>
      <Logo />
      <MainNav />
      <Telephone icon="" number="028 90 564 009" />
    </header>
  )
}

export default Header