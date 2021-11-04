const INITIAL_MOVIES = require('./movies.json')

let allMovies = []
let currentIndex = 0

function getAllMovies() {
  return [...allMovies]
}

function getById(id) {
  return getAllMovies().find((movie) => movie.id === id)
}
function getByTitle(title) {
  return getAllMovies().find((movie) => movie.title === title)
}

function createMovie({ title, img, synopsis, rating, year }) {
  const newMovie = {
    id: getNextIndex(),
    title,
    img,
    synopsis,
    rating,
    year,
  }

  allMovies = [...allMovies, newMovie]
  return newMovie
}
function updateMovie(movie, { title, img, synopsis, rating, year }) {
  copyMovie = {
    id: movie.id,
    title: title != undefined ? title : movie.title,
    img: img != undefined ? img : movie.img,
    synopsis: synopsis != undefined ? synopsis : movie.synopsis,
    rating: rating != undefined ? rating : movie.rating,
    year: year != undefined ? year : movie.year,
  }

  allMovies[movie.id - 1] = copyMovie;
  return copyMovie;
}
function deleteMovie(movieId) {
  allMovies = getAllMovies().filter(x => {
    return x.id != movieId;
  })
}
function init() {
  allMovies = [...INITIAL_MOVIES.movies]
  currentIndex = allMovies[allMovies.length - 1].id
}

function getNextIndex() {
  return ++currentIndex
}

init();

module.exports = { getAllMovies, getById, getByTitle, createMovie, deleteMovie, updateMovie, init }
