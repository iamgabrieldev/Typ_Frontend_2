import MenuLateral from "../../../Components/MenuLateral/index";
import { Container } from "./style";
import IlustracaoAlunoImg from '../../../Assets/ilustracao_alumni.svg'
import IlustracaoNotasImg from '../../../Assets/ilustracao_nota.svg'
import IlustracaoInicioImg from '../../../Assets/ilustracao_inicio.svg'

export default function InicioAdmin() {
  return (
    <Container>
      <MenuLateral />
      <main>
        <h1>Bem vindo ao Typ Education </h1>
        <div className="etiquetas">
          <div>
            <img src={IlustracaoInicioImg} alt="" />
          </div>
          <div className="etiqueta-item">
            <header>
              <h2>Aluno(a) Typ</h2>
              <img src={IlustracaoAlunoImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui para realizar o procedimentos referente a sua rematrícula!</p>
          </div>
          <div className="etiqueta-item position">
            <header>
              <h2>Boletim</h2>
              <img src={IlustracaoNotasImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui visualizar as notas e frequências referentes as disciplinas cursadas!</p>
          </div>
        </div>
      </main>
    </Container>
  )
}