import React from 'react'

import { Text, Icon, TextProps, IconName } from 'components'


type Value = Partial<TextProps> & {
  icon?: IconName
}

export type TextValueProps = {
  prev: Value
  next: Value
}

const TextValue: React.FC<TextValueProps> = (props) => {
  const { prev, next } = props

  return (
    <div className="flex items-center justify-between">
      {
        prev.icon && (
          <Icon
            className="mr-4 opacity-50"
            name={prev.icon}
            color="dark"
            size={16}
          />
        )
      }
      <Text
        className={prev.className}
        message={prev.message || '-'}
        color={prev.color || 'dark'}
        size={prev.size || 't14m'}
        dataTestId={`position-${prev.dataTestId || 'value'}-prev`}
      />
      {
        next.message && (
          <>
            <Icon
              className="mx-4"
              name="arrow/right"
              color="dark"
              size={16}
            />
            <Text
              className={next.className}
              message={next.message}
              size={next.size || 't14m'}
              color={next.color || 'dark'}
              dataTestId={`position-${next.dataTestId || 'value'}-next`}
            />
          </>
        )
      }
    </div>
  )
}


export default React.memo(TextValue)
