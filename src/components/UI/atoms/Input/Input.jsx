import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { UseClickOutside } from '@hooks'
import { InputWrap } from './style'

const Input = ({
  label,
  onChange,
  className,
  onClick,
  name,
  hookform,
  error,
  // register,
  ...props
}) => {
  const inputRef = useRef(null)
  const containerRef = useRef(null)
  const methods = useFormContext()
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)
  UseClickOutside(containerRef, setFocused, false)

  const handleClick = e => {
    if (hookform) {
      methods.setFocus(name)
    } else {
      inputRef.current.focus()
    }
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
      focused={
        focused || (hookform ? methods.getValues()[name]?.length : value.length)
      }
      className={className}
      onClick={handleClick}
      error={error}
    >
      <label>{label}</label>
      {hookform ? (
        <input
          type='text'
          name={name}
          {...methods.register(name, { required: true })}
          {...props}
        />
      ) : (
        <input
          type='text'
          ref={inputRef}
          name={name}
          onChange={handleChange}
          value={value}
        />
      )}
    </InputWrap>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func
}

Input.defaultProps = {
  label: 'Nro. de doc'
}
export default Input
