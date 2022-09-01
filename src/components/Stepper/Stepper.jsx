import React from 'react'

import { Paragraph } from '@atoms'
import { StepperStyled, List, ListItem } from './style'

const Stepper = ({ options, currentStep }) => {
  return (
    <StepperStyled>
      <List>
        {
          options.map(({ id, label }) => {
            return (
              <ListItem key={id} currentStep={currentStep === id}>
                <span>{id}</span>
                <Paragraph>{label}</Paragraph>
              </ListItem>
            )
          })
        }
      </List>

    </StepperStyled>
  )
}

Stepper.defaultProps = {
  options: [
    { id: 1, label: 'Datos' },
    { id: 2, label: 'Arma tu plan' }
  ],
  currentStep: 2
}
export default Stepper
