import React from 'react'
import PropTypes from 'prop-types'

import { ButtonBase } from './style'

const Button = ({
  text,
  handleClick,
  className,
  fullWidth,
  children,
  ...props
}) => {
  return (
    <ButtonBase
      fullWidth={fullWidth}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children || text}
    </ButtonBase>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  fullWidth: PropTypes.bool
}

Button.defaultProps = {
  fullWidth: false
}

export default Button
