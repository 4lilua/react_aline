import { Link } from "react-router-dom"
import { SHeader, SNavBar } from "./styles"
import Logo from "../../assets/logo.png"
export function Header() {

  return (
    <SHeader>
      <figure>
        <img src={Logo} alt="Logo do site" />
      </figure>
      <SNavBar>
        <div>
          <Link to="/">Início</Link>
          <Link to="/comentario">Comentário</Link>
        </div>
      </SNavBar>
    </SHeader>
  )
}