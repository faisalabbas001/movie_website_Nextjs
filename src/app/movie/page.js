import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"

import Image from "next/image";

const Movie = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  async function all() {
    const url = "https://movies-api14.p.rapidapi.com/shows";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0abeda04b0msh10b6982fbb3c372p17dd78jsn2b9308d7a585",
        "x-rapidapi-host": "movies-api14.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  const output = await all();
  const movie = output.movies;
  // console.log("api response is ok that ", output);

  return (



    <>
    <section className={styles.movieSection}>
        <div className={styles.container}>
            <h1>Series & Movie</h1>
            <div className={styles.card_section}>
                {
                  movie.map((curElem) => {
                        return <MovieCard key={curElem.id} {...curElem} />
                    })
                }
            </div>
        </div>
    </section>
</>


















    // <>
    //   {movie.map((curElem) => (
    //     <div key={curElem.id}>
    //       <br />
    //       <h1>{curElem.title}</h1>
    //       <h1>{curElem.movie}</h1>
    //       <br />
    //       <br />
    //       <p>{curElem.overview}</p>
    //       <br />
    //       <br />
    //       <Image 
    //         src={curElem.poster_path} 
    //         alt={`${curElem.title} poster`} 
    //         width={200} 
    //         height={200} 
    //       />
    //       <Image 
    //         src={curElem.backdrop_path} 
    //         alt={`${curElem.title} backdrop`} 
    //         width={200} 
    //         height={200} 
    //       />
    //     </div>
    //   ))}
    // </>
    // <>
    //   {output.map((curElem) => (
    //     <React.Fragment key={curElem.id}> {/* Use a unique key for each element */}
    //       <p>{curElem.movie}</p>
    //       <br />
    //       <p>{curElem.rating}</p>
    //       <br />
    //       <a href={curElem.imdb_url} target="_blank" rel="noopener noreferrer">
    //         {curElem.imdb_url}
    //       </a>
    //     </React.Fragment>
    //   ))}
    // </>
  );
};

export default Movie;
