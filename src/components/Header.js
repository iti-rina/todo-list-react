import header__img from "../assets/header__img.webp";

const Header = () => {
  return (
    <header className="header-wrap header">
      <img src={header__img} alt="emoji-girl" className="header__img"/>
      <h1 className="header__title">To-Do-List</h1>
    </header>
  )
}

export default Header;