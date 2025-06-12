const Nav = () => {
  return (
    <nav className="section-container flex justify-between text-gray-300 bg-black">
      <div>
        <a href="/">Punk Forum</a>
      </div>
      <div className="flex flex-row gap-4">
        <a href="/reg">Регистрация</a>
        <a href="/reg">Вход</a>
      </div>
    </nav>
  );
};

export default Nav;
