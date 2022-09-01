import styled from 'styled-components'

export const ContainerStyled = styled.div`
  padding: 0px 32px;
  margin: 0 auto;
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0px 64px;
    max-width: ${({ theme }) => theme.maxWidth.xl};
  }
`
