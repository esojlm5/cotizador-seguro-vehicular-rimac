import styled from 'styled-components'

export const ContainerSecure = styled.div`
  padding: 56px 0px 56px 32px;
  background-color: #F7F8FC;
  .secure-info {
    text-align: left
  }
  h5 {
    font-size: 10px;
    margin: 0;
    color: $title-gray1;
    font-family: Lato;
    font-weight: 700;
  }

`
export const WrapperSecure = styled.div`
  height: 100%;
  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
  }
`
