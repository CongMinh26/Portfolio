import React from 'react'
import { CTA } from './CTA'
import './header.css'
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
  return (
    <header className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Đạm Đài Nguyệt</h1>
      <h5 className='text-light'>Hoa Thần Cung</h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={require('../../assets/DamDai.png')} alt="me" />
      </div>
      <a href='#contact' className="scroll__down">Scroll Down</a>
    </header>

  )
}
