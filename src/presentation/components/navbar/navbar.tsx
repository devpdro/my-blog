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
  icon: React.ReactNode | string;
}

const MENU: MenuProps[] = [
  { name: "Início", link: "/", icon: "" },
  { name: "Publicações", link: "/publications", icon: "" },
  { name: "Quem sou eu?", link: "/", icon: <AiOutlineUser /> },
  { name: "Cursos", link: "/", icon: "" },
  { name: "Contato", link: "/", icon: "" },
];

const Navbar = () => {
  return (
    <S.Container>
      <S.Logo>Blog</S.Logo>
      <S.MenuGroup>
        {MENU.map((item, key) => (
          <Link key={key} href={item.link}>
            <S.Menu>
              <S.Icon>{item.icon}</S.Icon>
              <S.Item>{item.name}</S.Item>
            </S.Menu>
          </Link>
        ))}
      </S.MenuGroup>
    </S.Container>
  );
};

export default Navbar;
