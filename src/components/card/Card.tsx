interface CardProps {
  image: string;
  name: string;
  types: string;
  id: number;
}
const Card: React.FC<CardProps> = ({ image, name, types, id }) => {
  const imgSrc = image ? image : '/pikachu-voltage-road-sign-512x512.png';
  const imgAlt = image ? `${name} 이미지` : '제대로된 값이 안들어온 이미지';
  return (
    <article key={id} className="flex flex-col items-center cursor-pointer">
      <img className="w-[200px] h-[200px]" src={imgSrc} alt={imgAlt} />
      <p>{name}</p>
      <p>{types}</p>
    </article>
  );
};

export default Card;
