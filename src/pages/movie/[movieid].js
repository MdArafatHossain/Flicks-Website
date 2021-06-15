


function movie({keep}){
    
    // console.log(keep);
    return(
        <p>{keep.overview}</p>
    )

}

export const getServerSideProps = async ({context}) =>{
    console.log(context);
    const res = await fetch(`https://api.themoviedb.org/3/movie/${context}?api_key=6749d6f44b566d7ebad4659ebf1e2bb5&language=en-US/`)
    const data = await res.json();
    return{
        props:{
            keep:data,
        },
    };
};

export default movie;