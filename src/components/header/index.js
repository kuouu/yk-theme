import React, { useState, useEffect } from 'react'

import { getTutorCourses } from '../../utils/restapi'

import logo from '../../assets/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [courses, setCourses] = useState([])
  const [sidemenuOpen, setSidemenuOpen] = useState(false)
  const links = [
    { name: '首頁', link: '/' },
    {
      name: '精選課程', link: courses
    },
    { name: '講義專區', link: '/tag/handouts' },
    // { name: '募資專區', link: '/crowdfunding' },
    { name: '購物車', link: '/cart' },
    { name: '我的帳號', link: '/dashboard' },
  ]

  useEffect(() => {
    getTutorCourses(setCourses)
  }, [])

  const toggle = () => setIsOpen(!isOpen)
  return (
    <flex class="py-3 px-8 flex items-center bg-zinc-900 justify-between relative">
      <div class='block lg:hidden cursor-pointer' onClick={() => setSidemenuOpen(!sidemenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white">
          <path fill="#fff" d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm1 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4z" />
        </svg>
      </div>
      <a href="/" class='w-full flex justify-center lg:w-auto'>
        <img style={{ height: '3rem' }} src={logo} alt="logo" />
      </a>
      {/* desktop menu */}
      <ul class="hidden lg:flex gap-4 list-none">
        {links.map((link, index) => {
          if (Array.isArray(link.link))
            return (
              <li class="relative">
                <a
                  class={`block px-4 py-2 ${isOpen && 'font-bold text-[#29d7ff]'} hover:text-gray-400 hover:cursor-pointer`}
                  onClick={toggle}
                >
                  精選課程
                </a>
                {isOpen && <ul class="absolute grid gap-[1px] left-0 top-full shadow list-none z-10 w-full border-t-2 border-solid border-[#032292]">
                  {link.link.map((cls, index) =>
                    <li key={index} className='w-full flex justify-center'>
                      <a style={subNavStyle} href={cls.link} className='text-white hover:text-[#71d0ff]'>
                        {cls.name}
                      </a>
                    </li>
                  )}
                </ul>}
              </li>
            )
          return <li key={index}>
            <a class="block px-4 py-2 hover:text-gray-400" href={link.link}>{link.name}</a>
          </li>
        }
        )}
      </ul>
      {/* side menu */}
      {sidemenuOpen &&
        <ul class="block bg-slate-800 lg:hidden" style={sidemenuStyle}>
          <div class='block lg:hidden px-4 py-2 cursor-pointer' onClick={() => setSidemenuOpen(!sidemenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white">
              <path fill="#fff" d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm1 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4z" />
            </svg>
          </div>
          {links.map((link, index) => {
            if (Array.isArray(link.link))
              return (
                <li>
                  <a class={`block px-4 pt-4 pb-2 text-zinc-400 font-bold`}>精選課程</a>
                  <ul class="grid gap-[1px] top-full shadow list-none z-10 w-full">
                    {link.link.map((cls, index) =>
                      <li key={index} className='w-full flex justify-center'>
                        <a href={cls.link} className='text-sm pl-4 py-2 text-white hover:text-[#71d0ff] '>
                          {cls.name}
                        </a>
                      </li>
                    )}
                  </ul>
                </li>
              )
            return <li key={index}>
              <a class="block px-4 py-4 hover:text-gray-400" href={link.link}>{link.name}</a>
            </li>
          }
          )}
        </ul>
      }
    </flex>
  )
}

const subNavStyle = {
  width: '100%',
  padding: '0.5rem 1rem',
  textAlign: 'center',
  fontWeight: 900,
  backgroundColor: 'rgba(3, 34, 146, 0.35)'
}

const sidemenuStyle = {
  zIndex: 20,
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  padding: '0 2rem',
  paddingTop: '2rem',
}

export default Header