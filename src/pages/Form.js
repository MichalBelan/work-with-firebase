import React from "react";
import { useState } from "react";
import { projectFirestore } from "../firebase/config";
import "./Form.css"

const Form = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieAge, setMovieAge] = useState(null);
  const [movieTime, setMovieTime] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();

    console.log(movieTitle, movieAge, movieTime);
    const newMovie = {
      title: movieTitle,
      minage: parseInt(movieAge),
      time: parseInt(movieTime),
    };
    try {
       await projectFirestore.collection("movies").add(newMovie);
        setMovieAge("")
        setMovieTime("")
        setMovieTitle("")
    } catch (err) {
        console.log(err.message);
    }
    
  };

  return (
    <section className="form-section">
        <h1>Pridanie filmu</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Nazov filmu"
          onChange={(e) => setMovieTitle(e.target.value)}
          value={movieTitle}
        />
        <input
          type="number"
          placeholder="Minimalny vek"
          min={1}
          onChange={(e) => setMovieAge(e.target.value)}
          value={movieAge}
        />
        <input
          type="number"
          placeholder="Čas filmu"
          onChange={(e) => setMovieTime(e.target.value)}
          value={movieTime}
        />

        <input type="submit" value="Pridat film" />
      </form>
    </section>
  );
};

export default Form;
