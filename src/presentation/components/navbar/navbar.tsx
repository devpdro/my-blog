import * as S from "./navbar-styles";

const Navbar = () => {
  return (
    <S.Container>
      <S.Logo>Blog</S.Logo>
      <S.Menu>
        <S.Item>Início</S.Item>
        <S.Item>Publicações</S.Item>
        <S.Item>Quem sou eu?</S.Item>
        <S.Item>Cursos</S.Item>
        <S.Item>Contato</S.Item>
      </S.Menu>
    </S.Container>
  );
};

export default Navbar;
