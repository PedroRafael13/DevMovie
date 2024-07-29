import styled, { keyframes } from "styled-components";

const scale = keyframes`
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

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 5px;

}
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

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    
    padding: 0;

    h1 {
        width: 90%;
        margin-left: 40px;
        margin-top: 45%;
        font-size: 2.8rem;
        font-weight: 600;
    }

    p {
        width: 90%;
        margin-top: 20px;
        margin-left: 20px;
        font-size: 16px;
        
    } 
  }  
`

export const Poster = styled.div`
  z-index:2;
  img{
    width: 400px;
    border-radius:30px;
    animation: ${scale} 0.7s linear;
  }

  @media screen and (max-width: 600px) {
    display: none;
}
`

export const ContainerButtons = styled.div`
  display: flex;
  gap:20px;
  margin-top:30px;

  @media screen and (max-width: 600px) {
    gap: 7px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7%;

    button {
        font-size: 1rem;
       
    }
  }  
`

export const ButtonSearch = styled.button`
    padding: 15px 20px;
    color: white;
    border: 3px solid #ffffff;
    font-size: 15px;
    border-radius: 0px 20px 20px 0px;
    cursor: pointer;
    background-color: transparent; 

    &:hover {
        color: #ff0000;
        background-color: #ffffff;
    }
    
`

export const InputMovies = styled.input`
    border: 3px solid #ffffff;
    padding: 15px 20px;
    width: 240px;
    height: 57px;
    border-radius: 20px 0px 0px 20px; 
    outline: none;
    font-size: 15px;
    color: #ffffff;
    font-weight: 600;
    background-color: transparent; 

    &::placeholder {
        color: #ffffff;
    }

    
`

export const HelpBox = styled.div`
z-index: 999;
display: flex;
justify-content: center;
position: absolute;
top: 25px;
gap: 2px;

@media screen and (max-width: 600px) {
   margin-top: 15%;
}


`