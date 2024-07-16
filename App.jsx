import React from 'react';
import { MoviesProvider } from './MoviesContext';
import MovieSelector from './MovieSelector';
import RateMovieButton from './RateMovieButton';
import './App.css';
import './UploadButton.css';
import './MovieSelector.css';

const App = () => {
    return (
      <MoviesProvider>
        <div className="app">
          <header>
            <h1>Movie Rating Platform</h1>
          </header>
          <main>
            <div className="toolbar">
              <MovieSelector />
              <UploadButton />
            </div>
            <RateMovieButton />
          </main>
        </div>
      </MoviesProvider>
    );
  };
  
  export default App;
