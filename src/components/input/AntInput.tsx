import '@/styles/ant-input.scss'
import tw from '@/utilities/tw'
import { ConfigProvider, Input } from 'antd'
import { valueType } from 'antd/es/statistic/utils'
import React, { useCallback } from 'react'

interface AntInputProps {
  containerStyle?: React.CSSProperties
  containerClassName?: string
  type?: string
  label?: string
  placeholder?: string
  disabled?: boolean
  placeholderColor?: string
  required?: boolean
  errorText?: string
  errorClassName?: string
  value?: string | null | valueType
  onChangeText?: (value: string) => void
  onPressEnter?: (e: React.FormEvent<HTMLInputElement>) => void
}

const classes = {
  outerContainer: tw(`relative w-full flex flex-col gap-[2px]`),
  container: tw(`w-full flex flex-col gap-2`),
  labelAndInput: tw(`w-full flex flex-col gap-2`),
  labelLine: tw(`w-full flex gap-1 items-center text-md font-normal`),
  label: tw(`text-primary`),
  requiredStar: tw(`text-primary`),
}

const AntInput = ({
  containerStyle,
  containerClassName,
  type = 'text',
  label,
  placeholder,
  placeholderColor = 'var(--text-secondary)',
  required,
  disabled,
  errorText,
  errorClassName,
  value = '',
  onChangeText = () => {},
  onPressEnter = () => {},
}: AntInputProps) => {
  const onChangeTextFn = useCallback((e: any) => {
    const text = e.target.value
    onChangeText && onChangeText(text)
  }, [])

  return (
    <div className={tw(classes.outerContainer, containerClassName)}>
      <div
        className={tw(
          classes.container,
          'ant-input-container border border-grey-300 rounded-lg',
          containerClassName,
          !!errorText && 'border-[1px] border-red-600',
        )}
      >
        <ConfigProvider
          theme={{
            components: {
              Input: {
                hoverBorderColor: 'transparent',
                activeBorderColor: 'transparent',
                activeShadow: 'transparent',
              },
            },
            token: {
              colorBgContainer: 'transparent',
              colorBorder: '#F9F9F9',
              colorTextPlaceholder: !errorText ? placeholderColor : 'var(--text-secondary)',
            },
          }}
        >
          <Input
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            style={{
              resize: 'none',
            }}
            required={required}
            value={value as valueType}
            onChange={onChangeTextFn}
          />
        </ConfigProvider>
      </div>
      {!!errorText && (
        <div
          className={tw(
            'text-left text-red-600 text-[12px] leading-[18px] font-normal',
            errorClassName,
          )}
        >
          {errorText}
        </div>
      )}
    </div>
  )
}

export default AntInput
