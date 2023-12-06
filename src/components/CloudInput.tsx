import { useState } from 'react'
import { Input, InputProps } from '@cloudscape-design/components'

interface CloudInputProps extends Omit<InputProps, 'value'> {
  value?: string
}

export default function CloudInput({ value = '', ...props }: CloudInputProps) {
  const [internalValue, setInternalValue] = useState(value)
  return (
    <Input
      {...props}
      value={internalValue}
      onChange={({ detail: { value } }) => setInternalValue(value)}
    />
  )
}
