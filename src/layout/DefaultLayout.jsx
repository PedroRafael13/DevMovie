
import { Outlet } from "react-router-dom";
import Header from "../components/Header";


function DefautLeyout () {

  return(
    <>

    <Header />
    <Outlet />

    </>

)

}

export default DefautLeyout