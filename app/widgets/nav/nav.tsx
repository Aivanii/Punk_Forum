const Nav = () => {
  return (
    <nav className="text-gray-300 bg-black">
      <div className="section-container flex justify-between">
        <div>
          <a href="/">Punk Forum</a>
        </div>
        <div className="flex flex-row gap-4">
          <a href="/reg">Регистрация</a>
          <a href="/reg">Вход</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
