import Logo from "./Logo";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <header className="bg-alaz-blue h-64 flex flex-row grow">
      <Logo />
      <Menu />
    </header>
  );
}
