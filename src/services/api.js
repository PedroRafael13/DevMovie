import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: 'd5fc95c4d4305620c3a47faa2f7cfc63',
    language: 'pt-BR',
  }

})

export default api