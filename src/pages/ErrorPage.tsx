import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <section className="h-screen flex flex-row justify-center items-center">
      <img className="w-[400px]" src="/public/pikachu-voltage-road-sign-512x512.png" alt="경고하는 피카츄 그림" />
      <article className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold">페이지를 찾을 수 없어요</h1>
        <p>
          제대로 된 <strong>주소</strong>로 접근해주세요
          <br />
          다시 한번 페이지를 찾아봅시다!
        </p>
        <Link to="/" className="w-20 p-4 mt-20 bg-navyBlue rounded-[30px] text-bgColor">
          홈으로
        </Link>
      </article>
    </section>
  );
};

export default ErrorPage;
