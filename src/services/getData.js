import api from '../services/api'

export async function getMovies(){
  const {data : {results}} = await api.get('/movie/popular')
  return results [1]
}

export async function getCertificações (){
  const {data : {results}} = await api.get('/movie/now_playing')
  return results
}

export async function getTopMovies (){
  const {data : {results}} = await api.get('/movie/top_rated')
  return results
}

export async function getTopSeries (){
  const {data : {results}} = await api.get('/tv/top_rated')
  return results
}

export async function getSeriesPopular (){
  const {data : {results}} = await api.get('/tv/popular')
  return results
}

export  async function getPopularPeople (){
  const {data : {results}} = await api.get('/person/popular')
  return results
}

export async function getWantedPeople(){
  const {data : {results}} = await api.get('/trending/person/day')
  return results
}

export async function getBreve (){
  const {data : {results}} = await api.get('/movie/upcoming')
  return results
}

export async function getTopAr (){
  const {data : {results}} = await api.get('/tv/on_the_air')
  return results
}

export async function getAiringToday (){
  const {data : {results}} = await api.get('/tv/airing_today')
  return results
}

// Parte do Modal e Datail

export async function getMovieVideos(movieId){
  const {data: {results}} = await api.get(`/movie/${movieId}/videos`)
  return results
}

export async function getMovieCredits(movieId){
  const {data} = await api.get(`/movie/${movieId}/credits`)
  return data
}

export async function getMovieSimilar(movieId){
  const {data: {results}} = await api.get(`/movie/${movieId}/similar`)
  return results
}

export async function getMovieById(movieId){
  const {data} = await api.get(`/movie/${movieId}`)
  return data
}