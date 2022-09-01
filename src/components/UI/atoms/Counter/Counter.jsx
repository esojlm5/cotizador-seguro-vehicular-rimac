import React, { useState, useEffect } from 'react'

import { ReactComponent as Add } from '@/assets/gl_add.svg'
import { ReactComponent as Remove } from '@/assets/gl_remove.svg'

import { CounterStyled } from './style'
const Counter = ({
  value,
  increment,
  min,
  max,
  handleChange,
  ClassName,
  ...props
}) => {
  const [count, setCount] = useState(value)

  // useEffect(() => {
  //   handleChange(count)
  // }, [count])

  const handleIncrement = () => {
    setCount(count + increment)
    handleChange(count + increment)
  }
  const handleDecrement = () => {
    setCount(count - increment)
    handleChange(count - increment)
  }
  return (
    <CounterStyled className={ClassName} {...props}>
      <Remove className='counterButton' onClick={handleDecrement}>
        -
      </Remove>
      <span>{count.toLocaleString()}</span>
      <Add className='counterButton' onClick={handleIncrement}>
        +
      </Add>
    </CounterStyled>
  )
}

Counter.defaultProps = {
  value: 12000,
  increment: 100,
  min: 12500,
  max: 16500
}

export default Counter
