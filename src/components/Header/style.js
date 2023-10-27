import styled  from "styled-components";

export const Container  = styled.div`
  min-height:100px;
  z-index:99;
  left:0;
  position:fixed;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 50px;
  background-color:${(props) => props.changeBackground ? '#000' : 'transparent'};
  transition: background-color: 0.6s ease-in-out;

  img{
    width:20%;
  }

  @media screen and (max-width: 600px) {
    height: 50px;
    width: 25%;
    padding: 0px 0px;
    min-height: 67px;
}

img {
   
    width: 25%;

    @media screen and (max-width: 600px) {
    display: none;
}
}
`

export const Menu  = styled.ul`
  display: flex;
  list-style:none;
  gap:50px;

  @media screen and (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    margin-top: 14px;
}
`

export const Li  = styled.li`
  color:#ffffff;
  font-weight:600;
  cursor:pointer;
  font-size:28px;
  position: relative;

  a{
    text-decoration:none;
    color:#ffffff;
  }

  &::after{
    content: '';
    height:3px;
    width:${(props)=>(props.isActive ? '100%' : '0')};
    background-color:red;
    position: absolute;
    bottom:-10px;
    left:-50%;
    transform:translateX(50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after{
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    font-size: 23px;
    bottom: 15px;
    margin-top: 10px;
}

a {
    text-decoration: none;
    color: #ffffff;
}

&::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: red;
    position: absolute;
    bottom: -10px;
    left: 50%; /*ou left: 0; */
    transform: translateX(-50%); /* opcional*/
    transition: width 0.5s ease-in-out;
}

&:hover::after {
    width: 100%;
}
`