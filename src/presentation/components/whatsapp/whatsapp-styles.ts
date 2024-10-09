import styled from 'styled-components'

import { ICON } from 'src/presentation/assets'

export const Container = styled.a`
  background-color: ${({ theme }) => theme.colors.success};
  transition: ${({ theme }) => theme.transition.default};
  border-radius: ${({ theme }) => theme.radii.large};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 1.3rem;
  right: 1.3rem;
  width: 3.4rem;
  height: 3.4rem;

  &:hover {
    transform: scale(1.1);
  }

  &::before,
  &::after {
    background-color: ${({ theme }) => theme.colors.greenLight};
    content: '';
    position: absolute;
    animation: wave-animation 1.5s infinite ease-out;
    transform: scale(1);

    animation-delay: 1s;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  @keyframes wave-animation {
    0% {
      transform: scale(1);
      opacity: 0.4;
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`

export const Icon = styled(ICON.IconBrandWhatsapp)`
  color: ${({ theme }) => theme.colors.snow};
  font-size: ${({ theme }) => theme.fontSizes.default};

  stroke-width: 2;
  width: 2.2rem;
  height: 2.2rem;
`
