import Link from 'next/link'

import { ICON } from 'src/presentation/assets'
import { MenuProps } from 'src/data/models'

import * as S from './navbar-styles'

const MENU: MenuProps[] = [
  { name: 'Sobre', link: '/', icon: '' },
  { name: 'Artigos', link: '/publications', icon: '' },
  { name: 'Experiências', link: '/', icon: '' },
  { name: 'Projetos', link: '/', icon: '' },
  { name: 'Contato', link: '/', icon: '' },
]

const Navbar = () => (
  <S.Container>
    <S.Logo>/* V.H */</S.Logo>
    <S.MenuGroup>
      {MENU.map((item, link) => (
        <Link key={link} href={item.link}>
          <S.Menu>
            <S.Icon>{item.icon}</S.Icon>
            <S.Item>{item.name}</S.Item>
          </S.Menu>
        </Link>
      ))}
    </S.MenuGroup>
  </S.Container>
)

export default Navbar
