
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.id;
  console.log("id is that", id);

  const url = "https://freetestapi.com/api/v1/movies";
    
      const response = await fetch(url);
      const result = await response.json() 

        const output = result;

  console.log("api response is ok that ", output);

  return (
    <>
       {
           output.map((curElem) => {
               return (
                   <div className={styles.container}>
       <h2 className={styles.movie_title}>
         Netflix \ <span> {curElem.id} </span>
       </h2>
       <div className={styles.card_section}>
         <div>
    <a href={curElem.website} target="_blank" >
    <h9>CEHCK THAT THE MORE INFORMATION </h9>
    </a>
         </div>
         <div>
           <h1>{curElem.title}</h1>
           <p>{curElem.plot}</p>
         </div>
       </div>
     </div>
   
               )
           })
       }
    </>
    
   );
}

export default Page;