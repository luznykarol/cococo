import React from 'react'
import { Link } from 'gatsby'
import ReactSVG from 'react-svg'

const Navlist = ({ main, open, setOpen }) => {
  return (
    <>
      <div
        className={
          'navigation-list' +
          ' ' +
          (open ? 'navigation-open' : 'navigation-closed')
        }>
        {/* <ReactSVG src="/img/svg/logo-white.svg" className="logo-nav" /> */}
        <Link onClick={() => setOpen(false)} to='/' className='nav__link'>
          O nas
        </Link>
        <Link onClick={() => setOpen(false)} to='/about' className='nav__link'>
          Co robimy
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to='/projects'
          className='nav__link'>
          Realizacje
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to='/services'
          className='nav__link'>
          Usługi towarzyszące
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to='#contact'
          className='nav__link'>
          Kontakt
        </Link>
      </div>
    </>
  )
}
export default Navlist
