import api from './api'

    export  async function getSerie(){
      const {data: {results}} = await api.get('/tv/airing_today')
      return(results[1])

    }

    export async function getPopular(){
      const {data: {results}} = await api.get('/tv/popular')
      return(results)
    }

    export async function getSerieHere(){
      const {data: {results}} = await api.get('/tv/top_rated')
      return(results)
    }

    export async function getSerieKeep(){
      const {data: {results}} = await api.get('/tv/on_the_air')
      return(results)
    }

    export async function getSerieVideo(serieId){
      const {data : {results}} = await api.get(`/tv/${serieId}/videos`)
      return(results)
    }

    export async function getSeriesCredits(serieId){
      const {data: {cast} } = await api.get(`/tv/${serieId}/credits`)
      return cast
    }

    export async function getSeriesSimilar(serieId){
      const {data: {results} } = await api.get(`/tv/${serieId}/similar`)
      return results
    }

    export async function getSeri0eById(serieId){
      const {data} = await api.get(`/tv/${serieId}`)
      return data
    }
