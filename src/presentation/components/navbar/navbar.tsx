import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineBook,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";

import * as S from "./navbar-styles";

interface MenuProps {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const MENU: MenuProps[] = [
  { name: "Início", link: "/", icon: <AiOutlineHome /> },
  { name: "Publicações", link: "/publications", icon: <AiOutlineBook /> },
  { name: "Quem sou eu?", link: "/", icon: <AiOutlineUser /> },
  { name: "Cursos", link: "/", icon: <AiOutlineContacts /> },
  { name: "Contato", link: "/", icon: <MdOutlineContactMail /> },
];

const Navbar = () => {
  return (
    <S.Container>
      <S.Logo>Blog</S.Logo>
      <S.MenuGroup>
        {MENU.map((item, key) => (
          <S.Menu key={key}>
            <S.Icon>{item.icon}</S.Icon>
            <Link href={item.link}>
            <S.Item >{item.name}</S.Item>
            </Link>
          </S.Menu>
        ))}
      </S.MenuGroup>
    </S.Container>
  );
};

export default Navbar;
