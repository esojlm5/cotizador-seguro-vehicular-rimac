import React from 'react'
import { P } from './style'

const Paragraph = ({
  fsz,
  fszMd,
  color,
  children,
  maxW,
  className,
  ...props
}) => {
  return (
    <P
      fsz={fsz}
      fszMd={fszMd}
      color={color}
      maxW={maxW}
      className={className}
      {...props}
    >
      {' '}
      {children}{' '}
    </P>
  )
}

Paragraph.defaultProps = {
  fsz: 12,
  fszMd: 14
}

export default Paragraph
