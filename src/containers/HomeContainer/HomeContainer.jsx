import React, { useContext } from 'react'
import { useMedia } from 'react-use'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { useDispatch } from 'react-redux'

import { Container, LoginForm, BackgroundGradient } from '@components'
import { TitleRimac, Paragraph } from '@atoms'
import { setUser } from '@/redux/User/UserSlice'
import { ContainerSecure, WrapperSecure } from './style'

const HomeContainer = () => {
  const theme = useContext(ThemeContext)
  const isMd = useMedia(theme.breakpoints.md)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleForm = async form => {
    const { dni } = form
    const getUsers = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await getUsers.json()
    const filterUser = response.find(e => e.username === dni)
    if (filterUser) {
      dispatch(setUser(filterUser))
      navigate('/arma-tu-plan')
    }
  }

  return (
    <BackgroundGradient>
      <WrapperSecure>
        <ContainerSecure>
          <div className='secure-info'>
            <div className='secure-bg'>
              <div className='girl' />
            </div>
            <h5>¡NUEVO!</h5>
            {isMd
              ? (
                <TitleRimac>
                  Seguro <span>Vehicular Tracking</span>
                </TitleRimac>
                )
              : (
                <TitleRimac maxW={220}>
                  Seguro Vehicular <span>Tracking</span>
                </TitleRimac>
                )}
            <Paragraph fontFamily='Roboto' fsz={14} maxW={!isMd && 183}>
              Cuentanos donde le haras seguimiento a tu seguro
            </Paragraph>
          </div>
        </ContainerSecure>
        <Container className='form-container'>
          <TitleRimac fsz={24} fszMd={28}>
            Déjanos tus datos
          </TitleRimac>
          <LoginForm handleForm={handleForm} />
        </Container>
      </WrapperSecure>
    </BackgroundGradient>
  )
}

export default HomeContainer
