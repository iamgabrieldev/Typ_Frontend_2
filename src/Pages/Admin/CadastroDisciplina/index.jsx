import MenuLateral from "../../../Components/MenuLateral";
import { TextField, makeStyles, TextareaAutosize } from "@material-ui/core";
import { Container } from "./style";
import { Button } from '../../../Components/Button/style'
import IlustracaoImg from '../../../Assets/ilustracao_aluno.svg'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
  area: {
    width: 356,
    padding: 20,
  }

})

export default function CadastroDisciplina() {
  const classes = useStyles()
  return (
    <Container>
      <MenuLateral />
      <main>
        <h1>Cadastro de Disciplinas</h1>
        <form>
          <TextField
            className={classes.field}
            id="name"
            label="Nome da Disciplina"
            placeholder="Ex. José da Silva"
            variant="outlined"
            fullWidth            
          />
          <TextField
            className={classes.field}
            id="email"
            label="Código da Disciplina"
            placeholder="Ex. EM67H"
            variant="outlined"
            fullWidth            
          />
          <TextareaAutosize 
            className={classes.area}
            placeholder="Descrição da disciplina"
            minRows={9}
            fullWidth

          />        
          <TextField
            className={classes.field}
            id="aulas"
            label="Total de Aulas"
            placeholder="Ex. 53"
            variant="outlined"
            fullWidth            
          />
          <Button>
            Cadastrar Disciplina
          </Button>          
        </form>
      </main>
      <img src={IlustracaoImg} alt="" className="ilustracao" />
    </Container>
  )
}