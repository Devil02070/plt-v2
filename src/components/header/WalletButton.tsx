'use client'
import { Button } from "../ui/button";
import { MdOutlineWallet } from "react-icons/md";
import { ShortAddress } from "@/lib/utils";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { Spinner } from "../ui/spinner";
import { IoIosArrowDown } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { useDisconnect } from "@reown/appkit/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { P14 } from "../typography";
import CopyAddress from "../CopyAddress";
import Link from "next/link";
import { PiDiscordLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useWalletAuth } from "@/hooks/useWalletAuth";
import { useEffect } from "react";
import Cookies from 'js-cookie';

export default function WalletButton() {
    const { open } = useAppKit();
    const { disconnect } = useDisconnect();
    const { handleSignMsg } = useWalletAuth()
    const { address, status } = useAppKitAccount();

    useEffect(() => {
        if (status === 'connected') {
            handleSignMsg();
        }
        if (status === 'disconnected') {
            Cookies.remove('authToken');
            console.log('Wallet disconnected, auth token cleared');
        }
    }, [status])
    return (
        <>
            {
                address && status === 'connected' ?
                    <>
                        <DropdownMenu key={address}>
                            <DropdownMenuTrigger className="focus:outline-0" asChild>
                                <Button variant='outline' className="cursor-pointer">{ShortAddress(address)} <IoIosArrowDown /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="border border-black-15 stats-shadow w-40 me-4">
                                <DropdownMenuItem className="cursor-pointer p-2.5 justify-between" onSelect={(e) => e.preventDefault()}>
                                    <CopyAddress address={address} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className="md:hidden cursor-pointer p-0">
                                    <Link href="/" className="p-2.5 w-full flex items-center justify-between"><P14 className="font-medium">Discord</P14> <PiDiscordLogo className="text-black" /></Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="md:hidden cursor-pointer p-0">
                                    <Link href="/" className="p-2.5 w-full flex items-center justify-between"><P14 className="font-medium">Twitter</P14> <RiTwitterXLine className="text-black" /></Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="md:hidden cursor-pointer p-0">
                                    <Link href="/" className="p-2.5 w-full flex items-center justify-between"><P14 className="font-medium">Telegram</P14> <LiaTelegramPlane className="text-black" /></Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="md:hidden cursor-pointer p-0">
                                    <Link href="/" className="p-2.5 w-full flex items-center justify-between"><P14 className="font-medium">Docs</P14> <IoDocumentTextOutline className="text-black" /></Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer p-2.5 justify-between" onClick={() => disconnect()}>
                                    <P14 className="text-danger font-medium">Disconnect</P14> <RxExit className="text-danger" />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                    :
                    status === 'connecting' ?
                        <Button onClick={() => open()} variant='secondary' className="cursor-pointer">
                            Connecting <Spinner />
                        </Button>
                        :
                        <Button onClick={() => open()} variant='secondary' className="cursor-pointer">
                            Connect <MdOutlineWallet size={16} />
                        </Button>
            }
        </>
    )
}