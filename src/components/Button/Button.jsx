import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.scss'

const Button = ({ text, handleClick, className, fullWidth }) => {
  return (
    <button
      className={`${styles.main__button} ${
        fullWidth ? styles['main__button--fullwidth'] : ''
      } ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  fullWidth: PropTypes.bool
}

Button.defaultProps = {
  text: 'click here'
}

export default Button
