import "./styles.scss";

// eslint-disable-next-line react/prop-types
export default function LoginModal({closeModal}) {  
  return (
    <div className="container" >
    <div className="overlay container" onClick={closeModal}/>
    <div id="login-modal" className="login-modal">
      <h1>Entre e faça o seu cadastro:</h1>
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <input type="submit" value="Entrar" disabled />
      </form>
      <a id="esqueceuSenha" href="#">Esqueceu a senha ?</a>
      <button>Cadastre-se</button>
    </div>
    </div>
  );
}