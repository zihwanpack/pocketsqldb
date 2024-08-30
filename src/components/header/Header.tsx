import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = () => {
  return (
    <header className="h-15 bg-white flex flex-row justify-between items-center px-3">
      <Link to="/">
        <img className="h-full object-contain" src="/public/main_logo.png" alt="포켓몬 로고" />
      </Link>
      <nav className="text-textColor text-xl font-bold">
        <ul className="flex flex-row gap-5">
          <li>
            <Link to="/login" aria-label="로그인 페이지로 이동" title="로그인 페이지로 이동">
              <LoginIcon fontSize="large" color="primary" />
            </Link>
          </li>
          <li>
            <Link to="/mypage" aria-label="마이 페이지로 이동" title="마이 페이지로 이동">
              <AccountBoxIcon fontSize="large" color="primary" />
            </Link>
          </li>
          <li>
            <Link to="/pokedex" aria-label="도감 페이지로 이동" title="도감 페이지로 이동">
              <ListIcon fontSize="large" color="primary" />
            </Link>
          </li>
          <li>
            <Link to="/search" aria-label="검색 페이지로 이동" title="검색 페이지로 이동">
              <SearchIcon fontSize="large" color="primary" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
