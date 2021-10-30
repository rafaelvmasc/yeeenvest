import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

type CoinType = {
  id: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  market_cap: number;
};

type CoinContextType = {
  coins: Array<CoinType>;
};

type CoinContextProviderType = {
  children?: ReactNode;
};

export const CoinContext = createContext({} as CoinContextType);

export function CoinContextProvider({ children }: CoinContextProviderType) {
  const [coins, setCoins] = useState([
    {
      id: "",
      symbol: "",
      image: "",
      current_price: 0,
      price_change_percentage_24h_in_currency: 0,
      price_change_percentage_7d_in_currency: 0,
      market_cap: 0,
    },
  ]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d"
      )
      .then((res) => setCoins(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <CoinContext.Provider value={{ coins }}>{children}</CoinContext.Provider>
  );
}
