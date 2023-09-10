import { ButtonRed, ButtonWhite} from "./style"

function Button ({ children, red}){

  return (
    <>
    {red ? (
      <ButtonRed>{children}</ButtonRed>
    ) : (
      <ButtonWhite>{children}</ButtonWhite>
    )}
    </>
  )
}

export default Button