import styled from 'styled-components'

export const BackgroundStyled = styled.div`
  height: 100%;
  @media ${({ theme }) => theme.breakpoints.md} {
    background: linear-gradient(${({ linear }) => linear});
  }
`
