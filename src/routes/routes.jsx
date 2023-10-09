import { Route, Routes } from 'react-router-dom'
import Detail from '../containers/Detail'

import Home from '../containers/Home'
import Movie from '../containers/Movie'
import Serie from '../containers/Serie'
import DefautLeyout from '../layout/DefaultLayout'

function Router () {

  return(

    <Routes>
      <Route element={<DefautLeyout />}>
        <Route path='/' element={<Home />} />
        <Route path='/filmes' element={<Movie />} />
        <Route path='/Series/Animes' element={<Serie />} />
        <Route path='/Detelhes/:id' element={<Detail />} />
      </Route>
    </Routes>

  )

}

export default Router