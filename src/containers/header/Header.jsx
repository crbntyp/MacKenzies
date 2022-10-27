import React from 'react'

import { MainNav, Telephone, Logo } from '../../components'

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <MainNav />
      <Telephone type="las" icon="phone-square" number="028 90 564 009" />
    </header>
  )
}

export default Header