import styled from 'styled-components'
import { theme } from '../../context/ThemeProvider'

export const StepperStyled = styled.div`
  width: 100%;
`
export const List = styled.ul`
  list-style: none
`

export const ListItem = styled.li`
  display flex;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.colors.inputBorder};
  span {
    width: 25px;
    font-size: 12px;
    border-radius: 50%;
    border: 1px solid ${({ theme, currentStep }) => currentStep ? theme.colors.acianHover : theme.colors.inputBorder};
    background-color: ${({ currentStep }) => currentStep && theme.colors.acianHover};
    color: ${({ theme, currentStep }) => currentStep ? '#fff' : theme.colors.inputBorder};
    margin-right: 16px;
  }
`
