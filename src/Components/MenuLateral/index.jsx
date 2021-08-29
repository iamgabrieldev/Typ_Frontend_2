import { Container } from "./style"
import LogoImg from '../../Assets/Logo_branco.svg'
import HomeIcon from '../../Assets/Home.svg'
import ProfessorIcon from '../../Assets/Professor.svg'
import MatriculaIcon from '../../Assets/Matricula.svg'
import BoletimIcon from '../../Assets/Boletim.svg'

export default function MenuLateral() {
  return (
    <Container>
      <img src={LogoImg} />
      <div>
        <img src={HomeIcon} alt="" srcset="" />
        <img src={ProfessorIcon} alt="" srcset="" />
        <img src={MatriculaIcon} alt="" srcset="" />
        <img src={BoletimIcon} alt="" srcset="" />
      </div>
    </Container>
  )
}