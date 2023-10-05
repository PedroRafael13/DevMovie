import styled from "styled-components";

export const Background = styled.div`
  height:100vh;
  width:100vw;
  z-index:999;
  background-color:rgba(0, 0, 0, 0.8);
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
`

export const Container = styled.div `
  width: 50%;
  display: flex;
  justify-content:center;
  align-items:center;
  position: fixed;
  padding:50px;
  max-width:1200px;

  h1{
    color: #ffff;
    margin:0 0 500px 0;
  }

  iframe{
    border:none;
  }
`
