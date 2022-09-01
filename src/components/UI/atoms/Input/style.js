import styled from 'styled-components'
// import { theme } from '../../../../context/ThemeProvider'

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid #C5CBE0;
  border-color: ${({ error, theme }) => error && theme.colors.red};
  border-radius: 4px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.placeHolder};
  label {
    position: absolute;
    top: 0;
    margin: auto;
    transform: ${({ focused }) => focused
      ? 'translate(2px, 2px) scale(0.75)'
      : 'translate(12px, 16px) scale(1)'} ;
    transition: transform linear .25s;
    cursor: auto;
    font-family: Lato;
    color: ${({ error, theme }) => error && theme.colors.red};
  }
  input {
    padding: 25px 12px 8px;
    line-height: 1.8em;
    color: #494F66;
    font-family: Lato;
  }
  &.error {
    border-color: red;
    label {
      color: red;
    }
  }
  &.focused {
    label {
      transform: translate(2px, 2px) scale(0.75);
    }
  }
`
