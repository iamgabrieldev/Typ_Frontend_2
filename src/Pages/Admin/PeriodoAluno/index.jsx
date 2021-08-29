import MenuLateral from "../../../Components/MenuLateral";
import { TextField, makeStyles } from "@material-ui/core";
import { Container } from "../CadastroAluno/style";
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

export default function DefinirPeriodoDeMatricula() {
  const classes = useStyles()
  return (
    <Container>
      <MenuLateral />
      <main>
        <h1>Definição do Período de Matrícula</h1>
        <form>
          <label htmlFor="inicio">Inicio do Período de Matrícula</label>
          <TextField
            className={classes.field}
            id="name"
            type="date"
            variant="outlined"
            fullWidth            
          />
          <label htmlFor="fim">Fim do Período de Matrícula</label>
          <TextField
            className={classes.field}
            id="email"
            type="date"
            variant="outlined"
            fullWidth            
          />
          <Button>
            Definir Período
          </Button>          
        </form>
      </main>
      <img src={IlustracaoImg} alt="" className="ilustracao" />
    </Container>
  )
}