
interface MenuProps {
  name: string;
  link: string;
  icon: React.ReactNode | string;
}

const MENU: MenuProps[] = [
  { name: "", link: "/", icon: "" },
  { name: "", link: "/", icon: "" },
  { name: "", link: "/", icon: "" },
  { name: "", link: "/", icon: "" },
  { name: "", link: "/", icon: "" },
];

const Topics = () => {
  return (
    <div>
      <h1>Pesquisar por tópicos</h1>
    </div>
  );
};

export default Topics;
