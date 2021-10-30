import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";

export default function useCoin() {

    const coins = useContext(CoinContext)

    return coins
}
