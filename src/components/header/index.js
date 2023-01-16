import React, { useState } from 'react'

import logo from '../../assets/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const classes = [
    { name: '基礎工程', link: '/category/基礎工程' },
    { name: '土壤力學', link: '/category/土壤力學' },
  ]

  const toggle = () => setIsOpen(!isOpen)
  return (
    <flex class="py-3 px-8 flex justify-between items-center">
      <div class="">
        <a href="/">
          <img style={{ height: '3rem' }} src={logo} alt="logo" />
        </a>
      </div>
      <ul class="flex gap-4 list-none">
        <li><a class="block px-4 py-2 hover:text-gray-400" href="/">首頁</a></li>
        <li class="relative">
          <a class={`block px-4 py-2 ${isOpen && 'font-bold text-[#032292]'} hover:text-gray-400 hover:cursor-pointer`} onClick={toggle}>精選課程</a>
          {isOpen && <ul class="absolute grid gap-[1px] left-0 top-full shadow list-none z-10 w-full border-t-2 border-solid border-[#032292]">
            {classes.map((cls, index) =>
              <li key={index} className='w-full flex justify-center'>
                <a style={subNavStyle} href={cls.link} className='text-white hover:text-[#71d0ff]'>
                  {cls.name}
                </a>
              </li>
            )}
          </ul>}
        </li>
        <li><a class="block px-4 py-2 hover:text-gray-400" href="/tag/handouts">講義專區</a></li>
        <li><a class="block px-4 py-2 hover:text-gray-400" href="/tag/crowdfunding">募資專區</a></li>
        {/* <li><a href="/">資訊交流</a></li> */}
        <li><a class="block px-4 py-2 hover:text-gray-400" href="/cart">購物車</a></li>
        <li><a class="block px-4 py-2 hover:text-gray-400" href="/dashboard">我的帳號</a></li>
      </ul>
    </flex>
  )
}

const subNavStyle = {
  width: '100%',
  padding: '0.5rem 1rem',
  textAlign: 'center',
  fontWeight: 900,
  backgroundColor: 'rgba(3, 34, 146, 0.35)',
  '&:hover': {
    // color: 'rgb(113, 208, 255)',
    color: 'red!important',
    backgroundColor: 'red !important',
  }
}

export default Header