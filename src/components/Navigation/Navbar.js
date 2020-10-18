import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import ReactSVG from 'react-svg'
import { useLocation } from '@reach/router'
import NavList from '@/components/NavList'
import Burger from '@/components/Burger'

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
      <header className='relative container-lg' id='header'>
        <nav className='navigation'>
          <div className=''>
            <div className='navigation__inner flex justify-between items-start'>
              <>
                <ReactSVG src='../../img/svg/CCC-logo-full.svg'></ReactSVG>
                <NavList main={true} open={open} setOpen={setOpen} />
                <Burger
                  main={true}
                  navBar={navBar}
                  setOpen={setOpen}
                  open={open}
                />
              </>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
