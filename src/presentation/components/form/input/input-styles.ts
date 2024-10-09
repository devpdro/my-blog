import styled, { css } from 'styled-components'

import { InputProps } from './input'

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.darkMedium};
    border: 1px solid ${({ theme }) => theme.colors.darkLight};
    font-size: ${({ theme }) => theme.fontSizes.default};
    border-radius: ${({ theme }) => theme.radii.small};
    color: ${({ theme }) => theme.colors.info};

    width: 100%;
    padding: 0.5rem 2.8rem;
  

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      transition: ${({ theme }) => theme.transition.default};
    }
  `,
}

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
export const Icon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.icon};
  color: ${({ theme }) => theme.colors.info};
  position: absolute;
  display: flex;
  align-items: center;

  left: 0.8rem;
`

export const Input = styled.input<InputProps>`
  ${({ variant }) => css`
    -webkit-box-pack: center;
    transition: all 0.3s ease;

    width: 100%;
    width: 100%;

    ${variant && variants[variant]}

    &::placeholder {
      color: ${({ theme }) => theme.colors.darkLight};
    }
  `}
`
