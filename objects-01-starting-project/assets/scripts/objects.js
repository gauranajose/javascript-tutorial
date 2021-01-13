const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => {
        const formattedTitle = movie.info.title.toUpperCase();
        return formattedTitle.includes(filter.toUpperCase());
    });

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    const { info } = movie;
    let text = info.title + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text += `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() == '' || extraName.trim() == '' || extraValue.trim() == '') {
    return;
  }

  const newMovie = {
    // if keyname and valuename is the same
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
