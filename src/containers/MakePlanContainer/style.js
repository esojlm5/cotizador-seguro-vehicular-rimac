import styled from 'styled-components'

import { Container } from '@components'

export const WrapperPlan = styled(Container)`
  padding: 0;
  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    .containerPlan {
      padding-left: 96px;
      width: 50%;
      padding-top: 52px;
    }
    .steps {
      width: 20%;
      background-color: #F7F8FC;
      padding-top: 52px;
    }
  }
`
export const MakePlanStyled = styled.div`
  text-align: left;
  padding: 40px 32px 56px 32px;
  background: #F7F8FC;
  .back {
    display: flex;
    cursor: pointer;
    margin-bottom: 28px;
    p {
      margin-left: 16px;
    }
  }
  .watchTitle {
    margin-bottom: 8px
  }
  @media ${({ theme }) => theme.breakpoints.md}{
    background: transparent;
    padding: 0;
  }
`

export const CustomCoverage = styled.div`
  background: #fff;
  text-align: left;
  padding: 44px 32px;
  .showAmount {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
  .showAmountTitle {
    flex: 1;
    margin: 0;
  }
  .amountRange {
    display: flex;
    align-items: center;
    letter-spacing: 0.6px;
  }
  .minAmount {
    display: flex;
    align-items: center;
    margin-right: 12px;
    &:after {
      content: '';
      display: inline-flex;
      margin-left: 12px;
      height: 22px;
      width: 1px;
      background: #E4E8F7;
    }
  }
  .makeHeader {

  }
  @media ${({ theme }) => theme.breakpoints.md}  {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 55px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .counter {
      width: 100%;
      max-width: 160px;
      padding: 16px;
    }
    .showAmount {
    }
  }
`
export const OptionsCoverage = styled.div`
  padding: 0px 32px 106px 32px;
  @media ${({ theme }) => theme.breakpoints.md}  {
    padding-left: 0px;
    padding-right: 0px;
  }
`
export const TotalPlan = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 32px;
    box-shadow: 0px 1px 4px rgba(163, 171, 204, 0.06), 0px 8px 30px rgba(20, 43, 127, 0.1);
    button {
      width: 100%;
      max-width: 168px;
    }
    @media ${({ theme }) => theme.breakpoints.md}  {
      text-align: left;
      flex: 1;
      box-shadow: none;
      flex-direction: column;
      justify-content: start;
      margin-left: 60px;
      padding-top: 52px;
      button {
        max-width: none;
        margin-top: 32px;
      }
    }
`
