import React from 'react'
import Button from './index'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Atoms/Button', decorators: [withKnobs]}

export const primary = () => {
  const message = text('Text', 'Click here now!')
  return <Button message={message}></Button>
}