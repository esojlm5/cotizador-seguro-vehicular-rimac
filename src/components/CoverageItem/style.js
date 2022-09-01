import styled from 'styled-components'

export const CoverageContainer = styled.div`
  display: flex;
  padding-bottom: 32px;
  margin-bottom: 24px;
  border-bottom: 1px solid #E4E8F7;
  .itemHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .itemInfo {
    width: 100%;
  }
  .info {
    text-align: left;
  }
  .icon {
    margin-right: 18px;
  }
`

export const ShowLess = styled.div`
  cursor: pointer;
  p {
    text-align: left;
    color: ${({ theme }) => theme.colors.acianHover}
  }
`
