import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full h-15 bg-mintGreen flex flex-row justify-around items-center">
      <Link to="/">
        <img className="h-full object-contain" src="/public/main_logo.png" alt="포켓몬 로고" />
      </Link>
      <nav className="text-textColor text">
        <ul>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
