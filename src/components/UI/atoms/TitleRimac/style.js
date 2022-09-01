import styled from 'styled-components'

export const Title = styled.h3`
  font-size: ${({ fsz }) => `${fsz}px`};
  font-family: Lato;
  text-align: ${({ align }) => align && align};
  margin: ${({ margin }) => margin ? '0px' : '8px 0px 12px 0px'};
  letter-spacing: 0.2px;
  max-width: ${({ maxW }) => maxW && `${maxW}px`};
  line-height: 36px;
  color: ${({ theme, color }) => color || theme.colors.grayTitle};
  span {
    color: ${({ theme }) => theme.colors.red}
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ fszMd }) => `${fszMd}px`};
  }
`
