// // tv/popular : "https://api.themoviedb.org/3/tv/popular?api_key=6749d6f44b566d7ebad4659ebf1e2bb5&language=en-US&page=1"
// import {useState, useEffect} from 'react';

// function Home () {
//     const [apiData, setApiData] = useState ([])
//     useEffect (async () => {
//         await fetch ("https://api.themoviedb.org/3/tv/popular?api_key=6749d6f44b566d7ebad4659ebf1e2bb5&language=en-US&page=1")
//         .then (res => res.json())
//         .then ((result) => {
//             setApiData (result.results)
//         })
//     }, [])

//     return  (
//         <ul>
//             {apiData.map (item => (

//                 <li key = {item.id} style={{color:'black'}}>
//                     {item.name}
//                 </li> 
//             ))}
//         </ul>
//     )


// }
// export default Home;


// export const getStaticProps = async() => {
//     const res = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=6749d6f44b566d7ebad4659ebf1e2bb5&language=en-US&page=1")
//     const data = await  res.json();

//     return {
//         props: {arafat: data}
//     }
// }
// const Home = ({arafat}) =>{
//     return (
//         <div>
//             <h1>All the trending Tv shows</h1>
//             <ul>
//                 {arafat.map((arafat) =>(
//                     <li>{arafat.name}</li>
//                 ))}
//             </ul>
            
//         </div>
//     );

// }

// export default Home;
