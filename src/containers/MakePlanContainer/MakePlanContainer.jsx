import React, { useContext, useState } from 'react'
import { useMedia } from 'react-use'
import { ThemeContext } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  incrementByAmount,
  incrementBaseMount,
  decrementBaseMount
} from '@/redux/counter/counterSlice'

import { BackgroundGradient, PlateCard, CoverageItem } from '@components'
import { ReactComponent as IconTheft } from '@/assets/icon_theft.svg'
import { ReactComponent as IconLost } from '@/assets/icon_perdidatotal.svg'
import { ReactComponent as IconDamage } from '@/assets/icon_damage.svg'
import { ReactComponent as IconBack } from '@/assets/icon_back.svg'
import { Counter, Paragraph, TitleRimac, Button } from '@atoms'

import {
  WrapperPlan,
  MakePlanStyled,
  CustomCoverage,
  OptionsCoverage,
  TotalPlan
} from './style'

const MakePlanContainer = () => {
  const dispatch = useDispatch()
  const max = 16000
  const count = useSelector(state => state.counter.value)
  const baseMount = useSelector(state => state.counter.mount)
  const user = useSelector(state => state.user.user)
  const theme = useContext(ThemeContext)
  const isMd = useMedia(theme.breakpoints.md)
  const isLg = useMedia(theme.breakpoints.lg)
  const navigate = useNavigate()

  const [options, setOptions] = useState([
    {
      id: 1,
      icon: <IconTheft />,
      title: 'Llanta robada',
      checked: true,
      mount: 15,
      text:
        'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis'
    },
    {
      id: 2,
      icon: <IconDamage />,
      title: 'Choque y/o pasarte la luz roja ',
      checked: false,
      mount: 20,
      text:
        'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis'
    },
    {
      id: 3,
      icon: <IconLost />,
      title: 'Atropello en la vía Evitamiento ',
      checked: false,
      mount: 50,
      text:
        'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis'
    }
  ])

  const handleCounter = counter => {
    dispatch(incrementByAmount(counter))
    if (counter >= max) {
      const getOption = [...options]
      if (getOption[1].checked) {
        dispatch(decrementBaseMount(getOption[1].mount))
      }
      getOption[1].checked = false
      setOptions(getOption)
    }
  }

  const handleChangeOption = (option, id) => {
    const { checked } = option.target
    const getOption = [...options]
    const getIndex = getOption.findIndex(e => e.id === id)
    getOption[getIndex].checked = checked
    setOptions(getOption)
    if (baseMount >= 20) {
      dispatch(
        checked
          ? incrementBaseMount(getOption[getIndex].mount)
          : decrementBaseMount(getOption[getIndex].mount)
      )
    }
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <BackgroundGradient
      linear={`to right, #F7F8FC ${isLg ? '30%' : '20%'}, white 0`}
      style={{ height: `${isMd && 'auto'}` }}
    >
      <WrapperPlan>
        {isMd && <div className='steps'>steper</div>}
        <div className='containerPlan'>
          <MakePlanStyled>
            <div className='back' onClick={handleBack}>
              <IconBack />
              <Paragraph>volver</Paragraph>
            </div>
            <div className='watchCoverage'>
              {isMd
                ? (
                  <TitleRimac className='watchTitle'>
                    ¡Hola, <span>{user.name.split(' ')[0]}</span>
                  </TitleRimac>
                  )
                : (
                  <TitleRimac className='watchTitle'>
                    Mira las coberturas
                  </TitleRimac>
                  )}
              <Paragraph fsz={16}>Conoce las coberturas para tu plan</Paragraph>
              <PlateCard />
            </div>
          </MakePlanStyled>
          <CustomCoverage>
            <div className='showAmount'>
              <TitleRimac fsz={16} fszMd={16} className='showAmountTitle'>
                Indica la suma asegurada
              </TitleRimac>
              <div className='amountRange'>
                <Paragraph fszMd={12} className='minAmount'>
                  MIN $12.500{' '}
                </Paragraph>
                <Paragraph fszMd={12} className='maxAmount'>
                  MAX $16,500{' '}
                </Paragraph>
              </div>
            </div>
            <Counter
              className='counter'
              handleChange={handleCounter}
              value={count}
            />
          </CustomCoverage>
          <OptionsCoverage>
            {options.map(({ id, icon, title, text, checked }) => {
              return (
                <CoverageItem
                  handleChange={e => handleChangeOption(e, id)}
                  key={id}
                  icon={icon}
                  title={title}
                  text={text}
                  checked={checked}
                  disabled={(id === 2 && count) >= max}
                />
              )
            })}
          </OptionsCoverage>
        </div>
        <TotalPlan>
          {isMd && <Paragraph>Monto</Paragraph>}
          <div className='total'>
            <TitleRimac margin fsz={24} fszMd={28}>
              {`$ ${
                baseMount > 1000
                  ? baseMount.toLocaleString()
                  : `${baseMount}.00`
              }`}
            </TitleRimac>
            <Paragraph>Mensuales</Paragraph>
          </div>
          {/* <div></div> */}
          <Button text='lo quiero ' handleClick={() => navigate('/gracias')} />
        </TotalPlan>
      </WrapperPlan>
    </BackgroundGradient>
  )
}

export default MakePlanContainer
