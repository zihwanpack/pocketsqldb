import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 bg-transparent flex flex-col items-center justify-center z-[999]">
      <h2>잠시만 기다려주세요.</h2>
      <ClipLoader />
    </div>
  );
};

export default LoadingSpinner;
