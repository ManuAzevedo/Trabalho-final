import { useState } from 'react';
import Filme from './../filme/Filme'
import './Main.css'
import axios from 'axios';

//
const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/filmes");
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    throw error;
  }
};

//

import React, { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/filmes");
        setMovies(response.data);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
