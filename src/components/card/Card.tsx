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
    <article
      key={id}
      className="border-4 border-solid rounded-lg my-3 w-[300px] h-[300px] flex flex-col justify-center items-center cursor-pointer">
      <button></button>
      <figure>
        <img className="w-[200px] h-[200px]" src={imgSrc} alt={imgAlt} />
      </figure>
      <h3>{name}</h3>
      <figcaption>{types}</figcaption>
    </article>
  );
};

export default Card;
