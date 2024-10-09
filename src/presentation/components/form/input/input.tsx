import { type InputHTMLAttributes, type ReactNode } from 'react'

import * as S from './input-styles'

type InputVariants = 'primary'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariants
  placeholder?: string
  icon?: ReactNode
}

const Input = ({ variant = 'primary', placeholder, icon }: InputProps) => (
  <S.Container>
    {icon && <S.Icon>{icon}</S.Icon>}

    <S.Input variant={variant} placeholder={placeholder} />
  </S.Container>
)

export default Input
