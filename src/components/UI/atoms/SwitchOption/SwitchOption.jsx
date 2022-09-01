import React from 'react'

import { ContainerSwitch } from './style'

const SwitchOption = ({ handleChange, checked, disabled }) => {
  return (
    <ContainerSwitch>
      <label className='switch'>
        <input
          type='checkbox'
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <span className='slider round' />
      </label>
    </ContainerSwitch>
  )
}

export default SwitchOption
