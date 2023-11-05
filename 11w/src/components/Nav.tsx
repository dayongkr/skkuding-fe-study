const Nav = ({ onClick }: { onClick: () => void }) => {
  return (
    <nav onClick={onClick}>
      <h1>
        <a href="./">Pokemon List</a>
      </h1>
    </nav>
  );
};

export default Nav;
