import React from 'react'

const navData = [
  {
    text: 'Fleet Maintenance',
    onClick: () => {console.log('1')}
  },
  {
    text: 'Body Shop',
    onClick: () => {console.log('2')}
  },
  {
    text: 'Trailer Diagnostics',
    onClick: () => {console.log('3')}
  },
  {
    text: 'Get in Touch',
    onClick: () => {console.log('4')}
  }
]

const MainNav = () => {
  return (
    <nav className='main-nav'>
      <ul className='main-nav__container'>
        {
          navData.map(({
            onClick,
            text
          }) => (
            <li className='main-nav__container-item' onClick={onClick}>{text}</li>    
          ))
        }
      </ul>
    </nav>
  )
}

export default MainNav