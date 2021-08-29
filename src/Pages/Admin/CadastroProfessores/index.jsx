import MenuLateral from "../../../Components/MenuLateral";
import { TextField, makeStyles } from "@material-ui/core";
import { Container } from "./style";
import { Button } from '../../../Components/Button/style'
import IlustracaoImg from '../../../Assets/ilustracao_aluno.svg'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  }
})

export default function CadastroProfessores() {
  const classes = useStyles()
  return (
    <Container>
      <MenuLateral />
      <main>
        <h1>Cadastro de Professores</h1>
        <form>
          <TextField
            className={classes.field}
            id="name"
            label="Nome Completo"
            placeholder="Ex. José da Silva"
            variant="outlined"
            fullWidth            
          />
          <TextField
            className={classes.field}
            id="email"
            label="E-mail"
            placeholder="nome@dominio.com"
            variant="outlined"
            fullWidth            
          />
          <TextField
            className={classes.field}
            id="siape"
            label="Siape"
            variant="outlined"
            fullWidth            
          />          
          <TextField
            className={classes.field}
            id="siape"
            label="Disciplinas"
            placeholder="Código(s) da(s) disciplina(s)"
            variant="outlined"
            fullWidth            
          />
          <Button>
            Cadastrar Professor
          </Button>          
        </form>
      </main>
      <img src={IlustracaoImg} alt="" className="ilustracao" />
    </Container>
  )
}