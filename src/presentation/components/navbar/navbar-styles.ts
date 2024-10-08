import styled from "styled-components";

export const Container = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkLight};
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.9rem 2.5rem;
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.default};
  background: linear-gradient(
    to right,
    rgba(207, 164, 255, 1),
    rgba(131, 84, 203, 1)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-transform: uppercase;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;
`;

export const Item = styled.li`
  border-radius: ${({ theme }) => theme.radii.default};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.info};

  padding: 0.6rem 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkLight};
    transition: ${({ theme }) => theme.transition.default};
    color: ${({ theme }) => theme.colors.snow};
  }
`;
