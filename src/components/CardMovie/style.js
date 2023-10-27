import styled from "styled-components";

export const Container = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

img{
  border-radius:30px;
  width:300px;
  height:100%;
}

h3{
  color:#ffffff;
  margin-top:15px;
}

@media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

}

div {
    display: flex;
    flex-direction: column;
}

p {
 color: #ffffff;
 font-weight: 600;

 @media screen and (max-width: 600px) {
    width: 80px;
    

}
}

img {
    height: 200px;
}

`