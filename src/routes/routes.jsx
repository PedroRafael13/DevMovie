import { Route, Routes } from 'react-router-dom'
import Detail from '../containers/Detail'
import DetailSerie from '../containers/DetailSerie'

import Home from '../containers/Home'
import Movie from '../containers/Movie'
import Serie from '../containers/Serie'
import DefautLeyout from '../layout/DefaultLayout'
import { Login } from '../containers/Login'
import { Register } from '../containers/Register'

function Router() {

  return (

    <Routes>
      <Route element={<DefautLeyout />}>
        <Route path='/' element={<Home />} />
        <Route path='/filmes' element={<Movie />} />
        <Route path='/Series/Animes' element={<Serie />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/detailSerie/:id' element={<DetailSerie />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>

  )

}

export default Router