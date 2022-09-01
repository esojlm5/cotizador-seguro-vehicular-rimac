import React from 'react'
import { useSelector } from 'react-redux'

import { TitleRimac } from '@atoms'

const Thanks = () => {
  const count = useSelector(state => state.counter.value)
  return <TitleRimac>Count from redux {count}</TitleRimac>
}

export default Thanks
