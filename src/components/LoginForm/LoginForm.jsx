import React, { Fragment } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { InputForm, ButtonSubmit } from './style'

const fields = [
  {
    order: '1',
    items: [
      {
        id: '1',
        type: 'text',
        name: 'dni',
        label: 'Nro. de doc'
      }
    ]
  },
  {
    order: '2',
    items: [
      {
        id: '2',
        type: 'text',
        name: 'celular',
        label: 'Celular'
      }
    ]
  },
  {
    order: '3',
    items: [
      {
        id: '3',
        type: 'text',
        name: 'Placa',
        label: 'Placa'
      }
    ]
  }
]

const LoginForm = ({ handleForm }) => {
  const methods = useForm()
  const {
    handleSubmit,
    formState: { errors }
  } = methods

  const onSubmit = data => {
    handleForm(data)
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ items }) => {
          const { id, name, label } = items[0]
          return (
            <Fragment key={id}>
              <InputForm
                name={name}
                hookform
                label={label}
                error={errors[name]}
              />
            </Fragment>
          )
        })}
        <ButtonSubmit text='cotízalo' fullWidth type='submit' />
      </form>
    </FormProvider>
  )
}

export default LoginForm
