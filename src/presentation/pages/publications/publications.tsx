import { MenuProps } from 'src/data/models'

import * as S from './publications-styles'

const MENU: MenuProps[] = [
  { name: 'React', link: '/', icon: '' },
  { name: '', link: '/', icon: '' },
  { name: '', link: '/', icon: '' },
  { name: '', link: '/', icon: '' },
  { name: '', link: '/', icon: '' },
]

const Publications = () => {
  return (
    <S.Container>
      <h1>Pesquisar por tópicos</h1>
      {MENU.map((item, link) => (
        <div key={link}>{item.name}</div>
      ))}
    </S.Container>
  )
}

export default Publications
