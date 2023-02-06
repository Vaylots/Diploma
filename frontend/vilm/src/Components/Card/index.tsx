import { FC } from "react";
import { ICardProps } from "../../interfaces/Card.interface";

export const Card: FC<ICardProps> = ({
  filmId,
  titleRu,
  titleEng,
  imageUrl,
  genre,
}) => {
  return (
    <div className="m-2 aspect-auto rounded-md   bg-[#141414] p-3">
      <a href={`/films/${filmId}`}>
        <img src={imageUrl} className="aspect-auto" alt="poster" />
      </a>
      <div className="mt-4">
        <a href={`/films/${filmId}`} className="text-2xl">
          {titleRu}
        </a>
        <p className="text-md opacity-90">{titleEng}</p>
        <p className="text-md opacity-90">{genre}</p>
      </div>
    </div>
  );
};
