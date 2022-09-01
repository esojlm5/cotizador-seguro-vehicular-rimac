import React from 'react'
import PropTypes from 'prop-types'

import { BackgroundStyled } from './style'

const BackgroundGradient = ({ children, linear, ...props }) => {
  return (
    <BackgroundStyled linear={linear} {...props}>
      {children}
    </BackgroundStyled>
  )
}

BackgroundGradient.defaultProps = {
  linear: 'to right, #F7F8FC 30%, white 0'
}

BackgroundGradient.propTypes = {
  linear: PropTypes.string
}
export default BackgroundGradient
