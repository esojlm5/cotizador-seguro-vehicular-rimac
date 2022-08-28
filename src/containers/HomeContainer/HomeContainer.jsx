import React, { useEffect, useContext } from 'react'
import { clsx } from 'clsx'
import { useMedia } from 'react-use'

import { ThemeContext } from '@/context/ThemeProvider'
import { Container } from '@components'
import styles from './style.module.scss'

const HomeContainer = () => {
  const theme = useContext(ThemeContext)
  const isMd = useMedia(theme.breakpoints.md)

  useEffect(() => {
    console.log(isMd)
  }, [])

  return (
    <Container className={clsx(styles.container__custom)}>
      <div className={styles.secure__info}>
        <h5 className={styles['secure__info--new']}>¡NUEVO!</h5>
        <h3 className={styles['secure__info--title']}>
          Seguro Vehicular <span>Tracking</span>
        </h3>
        <p className={styles['secure__info--description']}>
          Cuentanos donde le haras seguimiento a tu seguro
        </p>
      </div>
      <div className={styles.form__container}>
        <h3>Déjanos tus datos</h3>
      </div>
    </Container>
  )
}

export default HomeContainer
