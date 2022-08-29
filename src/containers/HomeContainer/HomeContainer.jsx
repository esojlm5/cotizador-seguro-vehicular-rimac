import React, { useEffect, useContext } from 'react'
import { useMedia } from 'react-use'

import { ThemeContext } from 'styled-components'

import { Container, LoginForm } from '@components'
import { TitleRimac, Paragraph, Button } from '@atoms'
import { ContainerSecure, WrapperSecure } from './style'

const HomeContainer = () => {
  const theme = useContext(ThemeContext)
  const isMd = useMedia(theme.breakpoints.md)

  useEffect(() => {
    console.log(isMd)
  }, [])

  return (
    <WrapperSecure>
      <ContainerSecure>
        <div className='secure-info'>
          <h5>¡NUEVO!</h5>
          <TitleRimac maxW={220}>
            Seguro Vehicular <span>Tracking</span>
          </TitleRimac>
          <Paragraph fontFamily='Roboto' fsz={14} maxW={183}>
            Cuentanos donde le haras seguimiento a tu seguro
          </Paragraph>
        </div>
      </ContainerSecure>
      <Container className='form-container'>
        <TitleRimac fsz={24} fszMd={28}>
          Déjanos tus datos
        </TitleRimac>
        <LoginForm />
      </Container>
    </WrapperSecure>
  )
}

export default HomeContainer
