'use client'
import { useAppKitAccount } from "@reown/appkit/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import useProvider from "./useProvider";

export default function useBalance() {
    const [balance, setBalance] = useState(0)
    const { address } = useAppKitAccount()
    const { provider } = useProvider();
    const handleGetBalance = async () => {
        if (!address || !provider) return
        const balance = await provider.getBalance(address);
        const formattedValue = ethers.utils.formatEther(balance);
        console.log(`${formattedValue} `);
        setBalance(Number(formattedValue))
    };
    useEffect(() => {
        handleGetBalance()
    }, [address])

    return { balance }
}



// import { useAppKitBalance } from "@reown/appkit/react";

// function BalanceDisplay() {
//   const { fetchBalance } = useAppKitBalance();
//   const [balance, setBalance] = useState();
//   const { isConnected } = useAppKitAccount();
  
//   useEffect(() => {
//     if (isConnected) {
//       fetchBalance().then(setBalance);
//     }
//   }, [isConnected, fetchBalance]);

//   return (
//     <div>
//       {balance && (
//         <p>Balance: {balance.data?.formatted} {balance.data?.symbol}</p>
//       )}
//     </div>
//   );
// }