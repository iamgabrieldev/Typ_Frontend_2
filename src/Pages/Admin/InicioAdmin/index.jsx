import MenuLateral from "../../../Components/MenuLateral/index";
import { Container } from "./style";
import IlustracaoAlunoImg from '../../../Assets/ilustracao_alumni.svg'
import IlustracaoProfessorImg from '../../../Assets/ilustracao_teacher.svg'
import IlustracaoDisciplinaImg from '../../../Assets/ilustracao_discipline.svg'
import IlustracaoNotasImg from '../../../Assets/ilustracao_nota.svg'


export default function InicioAdmin() {
  return (
    <Container>
      <MenuLateral />
      <main>
        <h1>Seja bem vindo ao Typ Education </h1>
        <div className="etiquetas">
          <div className="etiqueta-item">
            <header>
              <h2>Cadastro de Professores</h2>
              <img src={IlustracaoProfessorImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui para realizar o cadastro de professores!</p>
          </div>
          <div className="etiqueta-item">
            <header>
              <h2>Cadastro de Alunos</h2>
              <img src={IlustracaoAlunoImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui para realizar o cadastro de Alunos!</p>
          </div>
          <div className="etiqueta-item">
            <header>
              <h2>Cadastro de Disciplinas</h2>
              <img src={IlustracaoDisciplinaImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui para realizar o cadastro de Disciplinas!</p>
          </div>
          <div className="etiqueta-item">
            <header>
              <h2>Lançamento de Notas e <br/>Frequências</h2>
              <img src={IlustracaoNotasImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui para realizar o lançamento das notas finais e frequências de aulas dos alunos!</p>
          </div>
        </div>
      </main>
    </Container>
  )
}