export default function Header(props) {
  const { handelToggleMenu } = props;
  return (
    <header>
      <button onClick={handelToggleMenu} className="open-nav-button">
        <i className="fa-solid fa-bars"></i>
      </button>
      <h1 className="text-gradient">Pokédex</h1>
    </header>
  );
}
