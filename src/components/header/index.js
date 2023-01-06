import React, { useState } from 'react'

import logo from '../../assets/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <flex class="py-3 px-8 bg-slate-100 flex justify-between items-center">
      <div class="">
        <a href="/">
          <img style={{ height: '3rem' }} src={logo} alt="logo" />
        </a>
      </div>
      <ul class="flex gap-4 list-none">
        <li><a class="block px-4 py-2 hover:text-gray-400" href="/">首頁</a></li>
        <li class="relative">
          <a class="block px-4 py-2 hover:text-gray-400 hover:cursor-pointer" onClick={toggle}>精選課程</a>
          <ul class="absolute left-0 top-full bg-white shadow rounded-md py-1 list-none z-10">
            {isOpen && <>
              <li><a class="block px-4 py-2 text-black hover:bg-gray-100" href="/courses/course1">Submenu item 1</a></li>
              <li><a class="block px-4 py-2 text-black hover:bg-gray-100" href="/courses/course2">Submenu item 2</a></li>
              <li><a class="block px-4 py-2 text-black hover:bg-gray-100" href="/courses/course3">Submenu item 3</a></li>
            </>}
          </ul>
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

export default Header