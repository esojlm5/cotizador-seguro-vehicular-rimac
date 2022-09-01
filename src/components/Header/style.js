import styled from 'styled-components'

import { Container } from '@components'

export const HeaderWrapper = styled.div`
  border: 1px solid #E4E8F7;
`
export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  .headerContact {
    display: flex;
    p {
      margin-right: 20px;
    }
    a {
      margin-left: 5px;
    }
    .phone {
      display: flex;
      align-items: center;
    }
  }
`
