
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./AllMovies.css"

const AllMovies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
   const unsubscribe= projectFirestore
      .collection("movies")
      .onSnapshot((snapshot) => {
        

        if (snapshot.empty) {
          setError("Ziadne filmy k vypisanie");
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
           
            result.push({ id: oneMovie.id, ...oneMovie.data() });
          });
          setData(result);
        }
      })
      
      return () => unsubscribe()
  }, []);


  const deleteMovie = (id)=>{
    projectFirestore.collection("movies").doc(id).delete()
  }

  return <section>
    {error && <p>{error}</p>}
    {data.map((oneMovie)=>{
       const {id,title}=oneMovie


       return <div key={id} className="one-movie">
          <p>{title}</p>
          <Link to={`/one-movie/${id}`}>Viac informacii</Link>
          <button type="button" onClick={() => deleteMovie(id)}>Vymazat</button>
       </div>
    })}
  </section>;
};

export default AllMovies;
