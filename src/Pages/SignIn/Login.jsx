import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'
import Ilustracao_login from '../../Assets/ilustracao_login.svg'
import logo from '../../Assets/logo.svg'
import './style.css'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  }
})

export default function Login() {
  const classes = useStyles()
  const history = useHistory()
  let condicao = false
  const menuLinks = [
    {
      path: '/admin/cadastro-de-professores'
    }
  ]

  return (
    <section className="container">
      <div className="div_img">
        <img src={Ilustracao_login} ></img>
      </div>
      <div className="div_info">
          <img src={logo}></img>
          <h2>
            Seja bem-vindo ao Typ uma plataforma para o gerenciamento dos alunos
          </h2>
        <form onSubmit>
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
            id="senha"
            label="senha"
            variant="outlined"
            fullWidth
            type="password"
          />
          <button
            type="submit"
            onClick={ () => history.push(menuLinks[0].path) }
            >
            Entrar
          </button>
        </form>
      </div>
    </section>
  )
}