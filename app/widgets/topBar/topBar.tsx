const TopBar = () => {
  return (
    <div className="text-gray-300 bg-black">
      <div className="section-container flex justify-between items-center h-8 px-20 relative">
        <div>
          <a href="/">Punk Forum</a>
        </div>
        <div className="flex flex-row gap-4">
          <a href="/reg">Регистрация</a>
          <a href="/login">Вход</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
