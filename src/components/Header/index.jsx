import Logo from '../../assets/logo.png'
import { Container, Menu, Li} from './style'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'



function Header () {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation() 

  window.onscroll = () => {
    if(! changeBackground && window.pageYOffset > 784){
      setChangeBackground(true)
    }if(changeBackground && window.pageYOffset <= 784){
      setChangeBackground(false)
    }
  }

  return(

    <Container changeBackground={changeBackground}>
      <img src={Logo}  />

      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to='/'>Home</Link>
        </Li>
        <Li isActive={pathname.includes('/filmes')}>
          <Link to='/filmes'>Filmes</Link>
        </Li>
        <Li isActive={pathname.includes('/Series/Animes')}>
          <Link to='/Series/Animes'>Series</Link>
        </Li>
      </Menu>
    </Container>

  )


}

export default Header