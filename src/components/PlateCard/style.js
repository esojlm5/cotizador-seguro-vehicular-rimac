import styled from 'styled-components'

export const PlateStyled = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 44px 16px 36px 24px;
  box-shadow: 0px 0px 10px rgba(163, 171, 204, .25);
    text-align: left;
  span {
    display: block;
    color: ${({ theme }) => theme.colors.graySpan};
  }
  h5{ 
    margin: 0;
    font-weight: normal;
    font-family: Lato;
    color: ${({ theme }) => theme.colors.grayTitle};
    font-size: 16px;
    line-height: 24px;
    max-width: 176px;
  }
  .cardInfo {

  }
`

export const Icon = styled.div`
  height: 100%;
  position: absolute;
  right: 0;
  height: 110%;
  width: 100px;
  top: -10%;
  svg {
    height: 100%;
  }
`
