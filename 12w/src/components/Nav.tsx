const Nav = ({ onClick }: { onClick: () => void }) => {
  return (
    <nav
      onClick={onClick}
      className="flex h-16 w-full items-center justify-center border-b border-solid border-b-primary"
    >
      <h1 className="w-full max-w-5xl px-4">
        <a
          href="./"
          className="text-xl font-bold text-primary no-underline hover:opacity-80"
        >
          Pokemon List
        </a>
      </h1>
    </nav>
  );
};

export default Nav;
