import React, { useState } from 'react'

import { TitleRimac, SwitchOption } from '@atoms'
import { ReactComponent as IconTheft } from '@/assets/icon_theft.svg'
import { CoverageContainer, ShowLess } from './style'
import Paragraph from '../UI/atoms/Paragraph/Paragraph'

const CoverageItem = ({
  icon,
  title,
  text,
  handleChange,
  checked,
  disabled
}) => {
  const [showInfo, setShowInfo] = useState(true)

  const handleShow = () => {
    setShowInfo(!showInfo)
  }

  return (
    <CoverageContainer>
      <div className='icon'>{icon}</div>
      <div className='itemInfo'>
        <div className='itemHeader'>
          <TitleRimac fsz={16} fszMd={20} align='left'>
            {title}
          </TitleRimac>
          <SwitchOption
            handleChange={handleChange}
            checked={checked}
            disabled={disabled}
          />
        </div>
        {showInfo && (
          <Paragraph fsz={14} className='info'>
            {text}
          </Paragraph>
        )}
        <ShowLess onClick={handleShow}>
          <Paragraph fsz={12}>{`ver ${showInfo ? 'menos' : 'mas'}`}</Paragraph>
        </ShowLess>
      </div>
    </CoverageContainer>
  )
}

CoverageItem.defaultProps = {
  icon: <IconTheft />,
  title: 'Llanta robada',
  text:
    'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis'
}
export default CoverageItem
