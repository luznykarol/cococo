import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import ReactSVG from 'react-svg'
import { useLocation } from '@reach/router'
import NavList from '@/components/Navigation/Navlist'
import Burger from '@/components/Navigation/Burger'

const Navbar = () => {
  const location = useLocation()
  const pathname = location.pathname
  const [open, setOpen] = useState(false)
  const [navBar, setNavBar] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }

    const height = document.getElementById('header').clientHeight
    setHeaderHeight(height)

    typeof window !== 'undefined' &&
      window.addEventListener('scroll', changeBackground)

    return () => window.removeEventListener('scroll', changeBackground)
  }, [])

  const changeBackground = () => {
    typeof window !== 'undefined' && window.scrollY > headerHeight
      ? setNavBar(true)
      : setNavBar(false)
  }

  return (
    <>
      <header className=' container-lg' id='header'>
        <nav className='navigation'>
          <div className='navigation__inner flex justify-between 1070:justify-end items-start'>
            <>
              <ReactSVG
                className='navigation__logo'
                src='../../img/svg/CCC-logo-full.svg'></ReactSVG>
              <NavList main={true} open={open} setOpen={setOpen} />
              <Burger
                main={true}
                navBar={navBar}
                setOpen={setOpen}
                open={open}
              />
            </>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
