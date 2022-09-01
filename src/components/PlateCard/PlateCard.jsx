import React from 'react'

import { ReactComponent as IconCard } from '@/assets/card-auto.svg'
import { PlateStyled, Icon } from './style'

const PlateCard = () => {
  return (
    <PlateStyled>
      <div className='cardInfo'>
        <span>Placa: C2U - 114</span>
        <h5>
          Wolkswagen 2019 <br />
          Golf
        </h5>
      </div>
      <Icon>
        <IconCard />
      </Icon>
    </PlateStyled>
  )
}

export default PlateCard
