import React from 'react'

import { Paragraph } from '@atoms'
import { ReactComponent as Logo } from '@/assets/rimac-logo.svg'
import { ReactComponent as Phone } from '@/assets/icon_phone.svg'
import { HeaderWrapper, HeaderContainer } from './style'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div className='logo'>
          <Logo />
        </div>
        <div className='headerContact'>
          <Paragraph>¿Tienes alguna duda?</Paragraph>
          <div className='phone'>
            <Phone />
            <a href='tel:+51(01) 411 6001'>(01) 411 6001</a>
          </div>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
