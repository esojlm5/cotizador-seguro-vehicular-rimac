import React from 'react'
import { Title } from './style'

const TitleRimac = ({
  fsz,
  fszMd,
  color,
  children,
  maxW,
  className,
  ...props
}) => {
  // const theme = useTheme()
  return (
    <Title
      fsz={fsz}
      fszMd={fszMd}
      color={color}
      maxW={maxW}
      className={className}
      {...props}
    >
      {' '}
      {children}{' '}
    </Title>
  )
}

TitleRimac.defaultProps = {
  fsz: 28,
  fszMd: 36
}

export default TitleRimac
