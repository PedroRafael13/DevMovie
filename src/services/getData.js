import api from '../services/api'

export async function getMovies(){
  const {data : {results}} = await api.get('/movie/popular')
  return results[0]
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

// Parte do Modal 

export async function getMovie(movieId){
  const {data : {results}} = await api.get(`/movie/${movieId}/videos`)
  return results[0]
}