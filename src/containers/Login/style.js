import styled from "styled-components";

export const Container = styled.div`
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;


  img{
    display:flex;
    justify-content:space-between;
    padding:10px 50px;
    width:40%;
  }
`

export const ContainerItems = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

export const Title = styled.h1`
  font-weight: 40;

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input{
      width: 100%;
      background-color: red;
      border: none;
      height: 52px;
      border-radius: 5px;
      padding: 0 16px;
    }

    label{
      font-size: 14px;
      line-height: 80%;
      font-weight: 400;
    }
`