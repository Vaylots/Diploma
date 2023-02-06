import { FC, useState, useEffect } from "react";
import { Header } from "../../Components/Header";
import { Card } from "../../Components/Card/";
import { IMovieList } from "../../interfaces/Popular.interface";
import { Footer } from "../../Components/Footer";
export const Home: FC = () => {
  const [movieList, setMovieList] = useState<IMovieList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/getAllMovies`)
        .then((response) => response.json())
        .then((data) => setMovieList(data));
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className="flex h-full w-full flex-col items-center text-white  md:h-screen">
        <div className=" h-ful items-center bg-black p-10">
          <h1 className="w-full text-3xl">Популярное</h1>
          <div className="flex w-full justify-center">
            <div className="m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {movieList.map((movie: IMovieList) => {
                return (
                  <Card
                    key={movie.pk}
                    filmId={movie.pk}
                    genre={movie.fields.genreRu}
                    titleRu={movie.fields.nameRu}
                    titleEng={movie.fields.name}
                    imageUrl={`${import.meta.env.VITE_BACKEND_MEDIA_URL}/${
                      movie.fields.image_url
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
