import { type ReactNode } from 'react'

import { ChatButtom, Navbar } from 'src/presentation/components'

import * as S from './default-styles'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.Container>
      <Navbar />
      {children}
      <ChatButtom />
    </S.Container>
  )
}

export default DefaultLayout
