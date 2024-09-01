const Footer: React.FC = () => {
  return (
    <footer className="h-15 backdrop-blur-sm bg-headerMint flex flex-col justify-center items-center py-3 text-textColor">
      <p>이건 포켓몬 도감 사이트입니다.</p>
      <address>
        제작자: <strong>zihwanpack</strong>
      </address>
    </footer>
  );
};

export default Footer;
