import "../styles/dashboard.scss";

import raffyImg from "../assets/images/raffy.gif";
import CoinList from "../components/table";

function Dashboard() {
  return (
    <main>
        <header className="cabecalho">
          <div className="user-info">
            <img src={raffyImg} alt="" className="user-avatar" />
            <h1 className="welcome-msg">Bem vindo, Rafael</h1>
          </div>
          <div className="saldo">
            <p>Saldo total:</p>
            <h2>R$ 32.000,00</h2>
          </div>
        </header>

        <div className="coin-list">
            <CoinList />
        </div>

    </main>
  );
}

export default Dashboard;
