
import Tiles from "components/Slide/Tiles"

const configuration = 'https://api.themoviedb.org/3/configuration?api_key=6749d6f44b566d7ebad4659ebf1e2bb5'
const movie=   'https://api.themoviedb.org/3/movie/popular?api_key=6749d6f44b566d7ebad4659ebf1e2bb5&language=en-US&page=1'
const upcoming='https://api.themoviedb.org/3/movie/upcoming?api_key=6749d6f44b566d7ebad4659ebf1e2bb5&language=en-US&page=1'
const tv = 'https://api.themoviedb.org/3/tv/popular?api_key=6749d6f44b566d7ebad4659ebf1e2bb5&language=en-US&page=1'

export default function Home({TvData,MovieData,UpcomingData,config}){
  console.log(TvData);
  console.log(MovieData);
  console.log(UpcomingData);
  return(
    <div>
        <h1>Tv shows</h1>
        <Tiles Data = {TvData} />
        <h1>Movies</h1>
        <Tiles Data = {MovieData} />
        <h1>Up coming</h1>
        <Tiles Data = {UpcomingData} />
  </div>
  ); 
}

export const getStaticProps = async () => {
  const res = await fetch (tv);
  const TvData  = await res.json();

  const res2 = await fetch(movie);
  const MovieData = await res2.json();

  const res3 = await fetch(upcoming);
  const UpcomingData = await res3.json();

  const res4 = await fetch (configuration);
  const config = await res4 .json();

  return  {
    props:{
      TvData,
      MovieData,
      UpcomingData,
      config,
    },
  };
};