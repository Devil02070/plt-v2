'use client'
import { Button } from "../ui/button";
import { MdOutlineWallet } from "react-icons/md";
import { useEffect, } from "react";
import { ShortAddress } from "@/lib/utils";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
export default function WalletButton() {
    const { open } = useAppKit();
    // const { handleSignMsg } = useWalletAuth()
    const { address, isConnected, } = useAppKitAccount();

    // useEffect(() => {
    //     if (isConnected && address) {
    //         handleSignMsg();
    //     }
    // }, [isConnected, address])
    return (
        <>
            {
                isConnected && address ?
                    <Button onClick={() => open()} variant='secondary' className="cursor-pointer">{ShortAddress(address)}</Button>
                    :
                    <Button onClick={() => open()} variant='secondary' className="cursor-pointer">Connect <MdOutlineWallet size={16} /></Button>
            }
        </>
    )
}