import styled from 'styled-components'
import { Container } from '@components'
import mbGirl from '@/assets/mb-secure.svg'
import lgGirl from '@/assets/lg-girl.svg'

export const ContainerSecure = styled.div`
  padding: 56px 0px 56px 32px;
  background-color: #F7F8FC;
  position: relative;
  .secure-info {
    text-align: left;
  }
  .secure-bg {
    width: 112px;
    height: 100%;
    position: absolute;
    right: 0;
    bottom: -40px;
    @media ${({ theme }) => theme.breakpoints.md}  {
      width: 100%;
      position: static;
      height: auto;
    }
    // @media ${({ theme }) => theme.breakpoints.md}  {
    //   height: 100%;
    //   width: calc(100% + (100vw - ${({ theme }) => theme.maxWidth.xl}) / 2);
    //   left: calc((${({ theme }) => theme.maxWidth.xl} - 100vw) / 2);
    // }
    // @media ${({ theme }) => theme.breakpoints.lg}  {
    //   width: calc(100% + (100vw - ${({ theme }) => theme.maxWidth.xl}) / 2);
    // }
  }
  .girl {
    width: 100%;
    height: 100%;
    background-image: url(${mbGirl});
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
  }
  h5 {
    font-size: 10px;
    margin: 0;
    color: $title-gray1;
    font-family: Lato;
    font-weight: 700;
  }
  @media ${({ theme }) => theme.breakpoints.md}  {
    width: 40%;
    padding-right: 60px;
    .girl {
      background-image: url(${lgGirl});
      height: 250px;
    }
  }
`
export const WrapperSecure = styled(Container)`
  height: 100%;
  padding: 0;
  .form-container {
    padding-bottom: 54px;
  }
  form {
    margin-top: 24px;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    display: flex;
    .form-container {
      padding: 56px 0px 0px 0px;
      margin: 0;
      margin-left 224px;
      max-width: 288px;
      width: 70%;
    }
  }
`

export const BackgroundSecure = styled.div`
  height: 100%;
  background: linear-gradient(to right, #F7F8FC 40%, white 0);
`
