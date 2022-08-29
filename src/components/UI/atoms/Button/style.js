import styled from 'styled-components'

export const ButtonBase = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  font-family: ${({ fontFamily }) => fontFamily || 'Lato'};
  line-height: 16px;
  padding: 19px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.red};
  transition: background-color 0.25s linear;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  &:hover {
    background-color: ${({ theme }) => theme.hover.button}
    }
  }
`
