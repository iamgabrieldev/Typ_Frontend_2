import { Container } from "./style"
import LogoImg from '../../Assets/logo_branco.svg'
import HomeIcon from '../../Assets/home.svg'

export default function MenuLateral() {
  return (
    <Container>
      <img src={LogoImg} />
      <div>
        <img src={HomeIcon} alt="" srcset="" />
      </div>
    </Container>
  )
}