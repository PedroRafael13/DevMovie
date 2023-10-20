import  styled  from "styled-components";

export const Background = styled.div`
    background-image:url(${(props)=> props.img });
    height: 100vh;
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
    }  
`

export const Container = styled.div``