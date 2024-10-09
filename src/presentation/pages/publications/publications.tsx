import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandCss3,
  IconBrandNodejs,
  IconBrandNextjs,
  IconTestPipe,
  IconCode,
} from '@tabler/icons-react'

import { MenuProps } from 'src/data/models'

import * as S from './publications-styles'

const MENU: MenuProps[] = [
  {
    name: 'JavaScript',
    link: '/',
    icon: <IconBrandJavascript color="#F7E01D" size={24} strokeWidth={1} />,
  },
  { name: 'React', link: '/', icon: <IconBrandReact color="#2AC7E3" size={24} strokeWidth={1} /> },
  { name: 'TypeScript', link: '/', icon: <IconBrandTypescript color="#3179C7" size={24} strokeWidth={1} /> },
  { name: 'Styles', link: '/', icon: <IconBrandCss3 color="#264DE4" size={24} strokeWidth={1} /> },
  { name: 'Node.js', link: '/', icon: <IconBrandNodejs color="#70A86E" size={24} strokeWidth={1} /> },
  { name: 'Next.js', link: '/', icon: <IconBrandNextjs color="#2C2D2D" size={24} strokeWidth={1} /> },
  { name: 'Testing', link: '/', icon: <IconTestPipe color="#99455D" size={24} strokeWidth={1} /> },
  { name: 'Dev', link: '/', icon: <IconCode color="#209FBE" size={24} strokeWidth={1} /> },
]

const Publications = () => {
  return (
    <S.Container>
      <h1>Pesquisar por tópicos</h1>
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
}

export default Publications
