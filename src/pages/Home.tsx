import "../styles/home.scss";

import { useHistory } from "react-router";

import imgPresentation from "../assets/images/presentation.svg";
import logoYe from "../assets/images/logo.svg";
import logoGoogle from "../assets/icons/google-icon.svg";
import loginIcon from "../assets/icons/log-in.svg";

export default function Home() {
  const history = useHistory();

  function handleGoogleAuth() {
    history.push("/dashboard");
  }

  return (
    <div id="page-auth">
      <aside>
        <div className="content">
          <img src={imgPresentation} alt="" className="present-img" />
          <h1 className="title">Seus investimentos na palma da sua mão.</h1>
          <p className="text">
            Acompanhe seus investimentos da maneira mais pratica possivel e em
            um unico lugar
          </p>
        </div>
      </aside>
      <main className="container">
        <div className="login">
          <div className="content">
            <img src={logoYe} alt="Yeeenvest" className="logoYe" />
            <button className="btn google" onClick={() => handleGoogleAuth()}>
              <img src={logoGoogle} alt="Google" /> Entre com sua conta Google
            </button>
            <div className="division">ou entre sem login</div>
            <button className="btn consult">
              {" "}
              <img src={loginIcon} alt="" /> Consultar mercado
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
