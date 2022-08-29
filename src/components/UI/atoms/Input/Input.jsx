import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { UseClickOutside } from '@hooks'
import { InputWrap } from './style'

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
    <InputWrap
      ref={containerRef}
      focused={focused || value.length}
      className={className}
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
    </InputWrap>
  )
}

Input.propTypes = {
  label: PropTypes.string
}

Input.defaultProps = {
  label: 'Nro. de doc'
}
export default Input
