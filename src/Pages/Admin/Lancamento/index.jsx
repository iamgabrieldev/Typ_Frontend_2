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
  },
  area: {
    width: 356,
    padding: 20,
  }

})

export default function Lancamento() {
  const classes = useStyles()
  return (
    <Container>
      <MenuLateral />
      <main>
        <h1>Lançamento de Notas e <br/>Frequência</h1>
        <form>
          <TextField
            className={classes.field}
            id="name"
            label="RA do Aluno"
            placeholder="Ex. a2211122"
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
          <TextField 
            className={classes.field}
            label="Total de Faltas"
            placeholder="Ex. 13"
            variant="outlined"
            fullWidth

          />        
          <TextField
            className={classes.field}
            id="aulas"
            label="Nota Final"
            placeholder="Ex. 7.56"
            variant="outlined"
            fullWidth            
          />
          <Button>
            Realizar o Lançamento
          </Button>          
        </form>
      </main>
      <img src={IlustracaoImg} alt="" className="ilustracao" />
    </Container>
  )
}