const MainPage = () => {
  return (
    <section className="h-screen bg-main bg-cover flex flex-row justify-center items-center">
      <article className="mb-[100px] text-textColor flex flex-col gap-5">
        <h1 className="text-4xl">당신의 포켓몬을 찾아보세요!</h1>
        <p className="text-xl">
          포켓몬 도감에서 포켓몬의 능력, 진화, 타입을 확인하고
          <br />
          최고의 포켓몬 트레이너로 거듭나세요.
          <br />
          지금 바로 포켓몬의 세계를 탐험해보세요!
        </p>
      </article>
    </section>
  );
};

export default MainPage;
