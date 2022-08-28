import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { clsx } from 'clsx'

import { UseClickOutside } from '@hooks'
import styles from './style.module.scss'

const Input = ({ label, onChange, className, onClick, name, ...props }) => {
  const inputRef = useRef(null)
  const containerRef = useRef(null)
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)
  UseClickOutside(containerRef, setFocused, false)

  const handleClick = e => {
    inputRef.current.focus()
    setFocused(true)
    if (onClick) {
      onClick()
    }
  }

  const handleChange = e => {
    const { value } = e.target
    setValue(value)
    onChange(e)
  }

  return (
    <div
      ref={containerRef}
      className={clsx([
        styles.container_base_input,
        className,
        (focused || value.length) && styles.focused
      ])}
      onClick={handleClick}
    >
      <label>{label}</label>
      <input
        type='text'
        ref={inputRef}
        name={name}
        onChange={handleChange}
        value={value}
        {...props}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string
}

Input.defaultProps = {
  label: 'Nro. de doc'
}
export default Input
