import { Input } from 'src/presentation/components'
import { ICON } from 'src/presentation/assets'
import { MenuProps } from 'src/data/models'

import * as S from './articles-styles'

const MENU: MenuProps[] = [
  {
    name: 'JavaScript',
    link: '/',
    icon: <ICON.IconBrandJavascript color="#F7E01D" size={24} strokeWidth={1} />,
  },
  { name: 'React', link: '/', icon: <ICON.IconBrandReact color="#2AC7E3" size={24} strokeWidth={1} /> },
  { name: 'TypeScript', link: '/', icon: <ICON.IconBrandTypescript color="#3179C7" size={24} strokeWidth={1} /> },
  { name: 'Styles', link: '/', icon: <ICON.IconBrandCss3 color="#264DE4" size={24} strokeWidth={1} /> },
  { name: 'Node.js', link: '/', icon: <ICON.IconBrandNodejs color="#70A86E" size={24} strokeWidth={1} /> },
  { name: 'Next.js', link: '/', icon: <ICON.IconBrandNextjs color="#2C2D2D" size={24} strokeWidth={1} /> },
  { name: 'Testing', link: '/', icon: <ICON.IconTestPipe color="#99455D" size={24} strokeWidth={1} /> },
  { name: 'Dev', link: '/', icon: <ICON.IconCode color="#209FBE" size={24} strokeWidth={1} /> },
]

const Articles = () => (
  <S.Container>
    <Input variant="primary" placeholder="Buscar" icon={<ICON.IconSearch size={24} strokeWidth={1} />} />

    <S.MenuGroup>
      {MENU.map((item, link) => (
        <S.Menu key={link}>
          <S.Icon>{item.icon}</S.Icon>
          <S.Item>{item.name}</S.Item>
        </S.Menu>
      ))}
    </S.MenuGroup>
  </S.Container>
)

export default Articles
