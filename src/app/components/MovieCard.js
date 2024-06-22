import styles from '@/app/styles/common.module.css'
import Image from "next/image";
import Link from "next/link";
const MovieCard = (curElem) => {
const movie = curElem;
// console.log("updated movie data",movie.title)
    const {_id,title,overview,backdrop_path} = movie;
      
    return (
    
            
            <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={backdrop_path} alt={title} width={260} height={200} />
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substring(0,18)}</h2>
                    <p>
                 {overview.substring(0,66)}
                    </p>

                    <Link href={`/movie/${_id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default MovieCard;