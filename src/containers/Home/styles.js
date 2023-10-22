import  styled, {keyframes}  from "styled-components";

const scale = keyframes `
  from{
    transform: scale(0);
  }to{
    transform: scale(1);
  }
`

export const Background = styled.div`

    background-image:url(${(props) => props.img}) ;
    height:100vh;
    background-position:center;
    background-size: cover;
    display:flex;
    align-items: center;
    justify-content:center;

    &::before{
      content: '';
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height: 103%;
      background-color:rgba(0,0,0,0.5);    
}
`
export const Container = styled.div`
  display: flex;
  justify-content:space-around;
  align-items:center;
  height: 100%;
  max-width:1500px;
`

export const Info = styled.div`
  z-index:2;
  padding: 20px;
  width: 50%;

  h1{
    font-size:5rem;
    font-weight:700;
    color: #ffffff;
  }

  p{
    font-size: 20px;
    font-weight:500;
    color: #ffffff;
    margin-top:30px;
    margin-bottom:20px ;
  }
`

export const Poster = styled.div`
  z-index:2;
  img{
    width: 400px;
    border-radius:30px;
    animation: ${scale} 0.7s linear;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap:20px;
  margin-top:30px;
`