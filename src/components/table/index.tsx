import "./styles.scss";
import useCoin from "../../hooks/useCoin";
import NumberFormat from "react-number-format";

export default function CoinList() {
  const { coins } = useCoin();

  return (
    <table>
      <tbody>
        <th></th>
        <th>Nome</th>
        <th>Preco</th>
        <th>24h%</th>
        <th>7d%</th>
        <th>Market Cap</th>
        {coins.map((coin) => {
          return (
            <tr>
              <img src={coin.image} alt="" className="coin-img" />
              <td className="coin-name">
                {coin.id}
                <strong className="coin-symbol"> {coin.symbol}</strong>
              </td>

              <td className="coin-price">
                <NumberFormat
                  value={coin.current_price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"R$"}
                />
              </td>
              <td
                className="coin-24h"
                style={{
                  color: `${
                    coin.price_change_percentage_24h_in_currency < 0
                      ? "red"
                      : "green"
                  }`,
                }}
              >
                {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
              </td>
              <td
                className="coin-7d"
                style={{
                  color: `${
                    coin.price_change_percentage_24h_in_currency < 0
                      ? "red"
                      : "green"
                  }`,
                }}
              >
                {coin.price_change_percentage_7d_in_currency.toFixed(2)}
              </td>
              <td className="coin-mktcap">
                <NumberFormat
                  value={coin.market_cap}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"R$"}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
