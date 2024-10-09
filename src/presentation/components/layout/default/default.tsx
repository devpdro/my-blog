import { type ReactNode } from 'react'

import { Navbar, Whatsapp } from 'src/presentation/components'

import * as S from './default-styles'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.Container>
      <Navbar />
      {children}
      <Whatsapp />
    </S.Container>
  )
}

export default DefaultLayout
