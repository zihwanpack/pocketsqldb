import useDelete from '../../hooks/useDelete';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
interface CardProps {
  image: string;
  name: string;
  types: string;
  id: number;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ image, name, types, id, onDelete }) => {
  const imgSrc = image ? image : '/pikachu-voltage-road-sign-512x512.png';
  const imgAlt = image ? `${name} 이미지` : '제대로된 값이 안들어온 이미지';
  const { isPending, error, deleteData } = useDelete(id);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteData();
      setIsDeleted(true);
      onDelete(id);
    } catch (error) {
      console.log('Failed to delete pokemon:', error);
    }
  };
  if (isDeleted) return null;

  return (
    <article
      key={id}
      className="border-4 border-solid rounded-lg my-3 w-[300px] h-[300px] flex flex-col justify-center items-center cursor-pointer">
      <button className=" ml-[70%]" onClick={handleDelete}>
        <ClearIcon color="error" fontSize="large" />
      </button>
      <figure className="-mt-8 ">
        <img className="w-[200px] h-[200px]" src={imgSrc} alt={imgAlt} />
      </figure>
      <h3>{name}</h3>
      <figcaption>{types}</figcaption>
      {isPending && <p>삭제 중...</p>}
      {error && <p>삭제하는 중 오류가 발생했습니다.</p>}
    </article>
  );
};

export default Card;
