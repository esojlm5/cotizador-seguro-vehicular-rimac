import styled from 'styled-components'

export const P = styled.p`
  font-family: ${({ fontFamily }) => fontFamily || 'Lato'};
  font-weight: 400;
  font-size: ${({ fsz }) => `${fsz}px`};
  line-height: 24px;
  max-width: ${({ maxW }) => maxW && `${maxW}px`};
  color: ${({ theme, color }) => color || theme.colors.grayParagraph};
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ fszMd }) => `${fszMd}px`}
  }
`
