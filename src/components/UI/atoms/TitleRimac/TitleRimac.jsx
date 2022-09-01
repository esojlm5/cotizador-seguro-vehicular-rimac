import React from 'react'
import { Title } from './style'

const TitleRimac = ({
  fsz,
  fszMd,
  color,
  children,
  maxW,
  align,
  margin,
  className,
  ...props
}) => {
  // const theme = useTheme()
  return (
    <Title
      margin={margin}
      fsz={fsz}
      fszMd={fszMd}
      color={color}
      maxW={maxW}
      align={align}
      className={className}
      {...props}
    >
      {children}
    </Title>
  )
}

TitleRimac.defaultProps = {
  fsz: 28,
  fszMd: 36
}

export default TitleRimac
