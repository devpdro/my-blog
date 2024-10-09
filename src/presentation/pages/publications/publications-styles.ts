import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;

  gap: 0.3rem;
`

export const Menu = styled.ul`
  background-color: ${({ theme }) => theme.colors.darkHigh};
  border-radius: ${({ theme }) => theme.radii.large};
  border: 1px solid ${({ theme }) => theme.colors.darkLight};
  text-transform: uppercase;
  display: flex;
  align-items: center;

  padding: 0.4rem 0.9rem;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    transition: ${({ theme }) => theme.transition.default};
    cursor: pointer;
  }
`

export const Item = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  font-weight: ${({ theme }) => theme.fontWeights.default};
`

export const Icon = styled.div`
  display: flex;
  align-items: center;

  margin-right: 0.325rem;
`
