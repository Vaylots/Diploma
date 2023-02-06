import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../../Components/Header";
import { IMovieList } from "../../../interfaces/Popular.interface";
import { Footer } from "../../../Components/Footer";

export const Film: FC = () => {
  const { filmId } = useParams<string>();
  const [MovieData, setMovieData] = useState<IMovieList[]>([]);
  const [Loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      await fetch(
        `${import.meta.env.VITE_BACKEND_API_URL}/getMovieById?id=${filmId}`
      )
        .then((response) => response.json())
        .then((data) => setMovieData(data));

      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className=" w-full justify-center text-white">
      <Header />
      {Loading ? (
        <></>
      ) : (
        <div className=" m-2 flex  justify-center  p-2">
          <div className="flex w-full flex-col justify-center  gap-10 p-2  lg:w-2/3 lg:flex-row ">
            <div className="flex flex-col items-center ">
              <img
                className=" mb-2 max-w-xs  rounded-md  lg:max-w-md"
                src={`${import.meta.env.VITE_BACKEND_MEDIA_URL}/${
                  MovieData[0].fields.image_url
                }`}
                alt=""
              />
              <video
                className="aspect-video max-w-xs lg:max-w-sm"
                preload="auto"
                controls
              >
                <source
                  src={`${
                    import.meta.env.VITE_BACKEND_API_URL
                  }/getMovieTrailerById?id=${filmId}`}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="mb-4 ">
                <div className="mb-2 ">
                  <p className="text-5xl font-bold">
                    {MovieData[0].fields.nameRu}
                  </p>
                  <p className="mt-2 text-xl font-medium opacity-90">
                    {MovieData[0].fields.name}
                  </p>
                </div>
                <p className="w-full text-justify lg:w-2/3">
                  {MovieData[0].fields.description}
                </p>
              </div>
              <div>
                <p className="mb-2 text-justify text-2xl">О фильме</p>
                <ul>
                  <li className="text-md mb-1 flex  gap-1  lg:gap-10">
                    <p className="w-36 opacity-80">Год производства</p>
                    <p className="w-1/2 items-start">
                      {MovieData[0].fields.year}
                    </p>
                  </li>
                  <li className="text-md mb-1 flex gap-1 lg:gap-10">
                    <p className="w-36 opacity-80">Страна</p>
                    <p className="w-1/2 items-start">
                      {MovieData[0].fields.countryRu}
                    </p>
                  </li>
                  <li className="text-md mb-1 flex gap-1 lg:gap-10">
                    <p className="w-36 opacity-80">Жанр</p>
                    <p className="w-1/2 items-start">
                      {MovieData[0].fields.genreRu}
                    </p>
                  </li>
                  <li className="text-md mb-1 flex gap-1 lg:gap-10">
                    <p className="w-36 opacity-80">Режиссер</p>
                    <p className="w-1/2 items-start">
                      {MovieData[0].fields.filmDirector}
                    </p>
                  </li>
                  <li className="text-md mb-1 flex gap-1 lg:gap-10">
                    <p className="w-36 opacity-80">Сценарий</p>
                    <p className="w-1/2 items-start">
                      {MovieData[0].fields.screenWriter}
                    </p>
                  </li>
                  <li className="text-md mb-1 flex gap-1 lg:gap-10">
                    <p className="w-36 opacity-80">Бюджет</p>
                    <p className="w-1/2 items-start">
                      ${MovieData[0].fields.budjet}
                    </p>
                  </li>
                  <li className="text-md mb-1 flex gap-1 lg:gap-10">
                    <p className="w-36 opacity-80">Сборы в США</p>
                    <p className="w-1/2 items-start">
                      ${MovieData[0].fields.moneyUsa}
                    </p>
                  </li>
                  <li className="text-md mb-1 flex gap-1 lg:gap-10">
                    <p className="w-36 opacity-80">Сборы в мире</p>
                    <p className="w-1/2 items-start">
                      ${MovieData[0].fields.moneyTotal}
                    </p>
                  </li>
                  <li className="text-md mb-1 flex  gap-1 lg:gap-10">
                    <p className="w-36 opacity-80">Возраст</p>
                    <p className="w-1/2 items-start">
                      {MovieData[0].fields.age}+
                    </p>
                  </li>
                  <li className="text-md mb-1 flex gap-1 lg:gap-10">
                    <p className="w-36 opacity-80">Время</p>
                    <p className="w-1/2 items-start">
                      {MovieData[0].fields.time} Мин
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
