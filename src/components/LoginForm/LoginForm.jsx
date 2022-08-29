import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { Input, Button } from '@atoms'

const fields = [
  {
    order: '7',
    items: [
      {
        id: '1',
        type: 'text',
        name: 'dni',
        label: 'Nro. de doc'
      }
    ]
  }
]
const LoginForm = () => {
  const methods = useForm()
  const {
    handleSubmit,
    watch,
    formState: { errors }
  } = methods
  const onSubmit = data => console.log('data', data)
  console.log(watch('exampleRequired'))
  console.log('errors', errors)
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name='exampleRequired' hookform />
        {errors.exampleRequired && <span>This field is required</span>}
        <Button text='cotízalo' fullWidth type='submit' />
      </form>
    </FormProvider>
  )
}

export default LoginForm
