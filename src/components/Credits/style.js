import styled  from "styled-components";

export const Title = styled.h4`
  color:#ffffff;
  font-size:28px;
  font-weight:700;
`

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap:10px;

  div{
    display: flex;
    flex-direction:column;
  }

  p{
    color: #ffffff;
  }

  img{
    height:200px;
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