import Link from "next/link";

import { ICON } from "src/presentation/assets";
import { MenuProps } from "src/data/models";

import * as S from "./navbar-styles";

<<<<<<< HEAD
const MENU: MenuProps[] = [
  { name: "Início", link: "/", icon: "" },
  { name: "Publicações", link: "/publications", icon: "" },
  { name: "Quem sou eu?", link: "/", icon: <ICON.AiOutlineUser /> },
  { name: "Cursos", link: "/", icon: "" },
  { name: "Contato", link: "/", icon: "" },
=======
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
>>>>>>> parent of 1908dd8 (feat: creating topics)
];

const Navbar = () => {
  return (
    <S.Container>
      <S.Logo>Blog</S.Logo>
      <S.MenuGroup>
<<<<<<< HEAD
        {MENU.map((item, link) => (
          <Link key={link} href={item.link}>
            <S.Menu>
              <S.Icon>{item.icon}</S.Icon>
              <S.Item>{item.name}</S.Item>
            </S.Menu>
          </Link>
=======
        {MENU.map((item, key) => (
          <S.Menu key={key}>
            <S.Icon>{item.icon}</S.Icon>
            <Link href={item.link}>
            <S.Item >{item.name}</S.Item>
            </Link>
          </S.Menu>
>>>>>>> parent of 1908dd8 (feat: creating topics)
        ))}
      </S.MenuGroup>
    </S.Container>
  );
};

export default Navbar;
