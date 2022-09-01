import React from 'react'
import PropTypes from 'prop-types'

import { ContainerStyled } from './style'

const Container = ({ children, className, ...props }) => {
  return (
    <ContainerStyled className={className} {...props}>
      {children}
    </ContainerStyled>
  )
}

Container.propTypes = {
  children: PropTypes.node
}
export default Container
