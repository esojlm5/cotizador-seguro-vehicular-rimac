import styled from 'styled-components'

export const CounterStyled = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  justify-content: space-between;
  max-width: 300px;
  border-radius: 8px;
  padding: 16px 28px;
  color: ${({ theme }) => theme.colors.grayTitle};
  .counterButton {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.acianHover};
    font-size: 20px;
  }
`
