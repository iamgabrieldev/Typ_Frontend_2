import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CadastroAluno from './Pages/Admin/CadastroAluno/index';
import CadastroDisciplina from './Pages/Admin/CadastroDisciplina/index';
import CadastroProfessores from './Pages/Admin/CadastroProfessores/index';
import Lancamento from './Pages/Admin/Lancamento/index';
import DefinirPeriodoDeMatricula from './Pages/Admin/PeriodoAluno/index';
import Login from "./Pages/SignIn/Login";
import InicioAdmin from './Pages/Admin/InicioAdmin/index';
import InicioAluno from './Pages/Aluno/Inicio';
import Boletim from './Pages/Aluno/Grade/index'
import HistoricoEscolar from './Pages/Aluno/HistoricoEscolar';
import Rematricula from './Pages/Aluno/Rematricula/index'
import MapaProfessores from './Pages/Aluno/MapaProfessores';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/admin/Cadastro-de-professores">
          <CadastroProfessores />
        </Route> 
        <Route exact path="/admin/Cadastro-de-alunos">
          <CadastroAluno />
        </Route> 
        <Route exact path="/admin/Cadastro-de-disciplina">
          <CadastroDisciplina />
        </Route> 
        <Route exact path="/admin/lancamento">
          <Lancamento />
        </Route>
        <Route exact path="/admin/Definicao-do-periodo-de-matricula">
          <DefinirPeriodoDeMatricula />
        </Route> 
        <Route exact path="/admin">
          <InicioAdmin />
        </Route> 
        <Route exact path="/inicio">
          <InicioAluno />
        </Route> 
        <Route exact path="/Boletim">
          <Boletim />
        </Route> 
        <Route exact path="/Historico-Escolar">
          <HistoricoEscolar />
        </Route> 
        <Route exact path="/Rematricula">
          <Rematricula />
        </Route> 
        <Route exact path="/Mapa-dos-professores">
          <MapaProfessores />
        </Route> 
      </Switch>
    </Router>

  );
}

export default App;
