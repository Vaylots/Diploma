export interface IMovieList {
  model: string;
  pk: string;
  fields: {
    name: string;
    nameRu: string;
    image_url: string;
    trailer_url: string;
    trailer_file: string;
    description: string;
    year: number;
    countryRu: string;
    genreRu: string;
    filmDirector: string;
    screenWriter: string;
    budjet: number;
    moneyUsa: number;
    moneyTotal: number;
    premier: string;
    premierRu: string;
    age: number;
    time: number;
  };
}
