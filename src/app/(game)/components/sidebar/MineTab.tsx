'use client'
import { P12, P14 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { handleKeyPress } from "@/lib/utils";
import Image from "next/image";
import { MdOutlineWallet } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import WalletButton from "@/components/header/WalletButton";
import { Spinner } from "@/components/ui/spinner";
import useBalance from "@/hooks/useBalance";
import { ethers } from "ethers";
import useContract from "@/hooks/useContract";

interface MineProps {
    amount: string;
    setAmount: Dispatch<SetStateAction<string>>
    handleDeposit: () => void
    timer: number;
    selectedIndexes: number[];
    isDepositing: boolean
}
export default function MineTab({ amount, setAmount, handleDeposit, timer, selectedIndexes, isDepositing }: MineProps) {
    const { isConnected } = useAppKitAccount()
    const { balance } = useBalance()

    const { address } = useAppKitAccount()
    const { readContract } = useContract();
    const [totalDeposit, setTotalDeposit] = useState(0)
    const [userDeposit, setUserDeposit] = useState(0)
    const [powerhouse, setPowerhouse] = useState(0)

    const getPowerhouseBalance = async () => {
        try {
            const amount = await readContract.powerHouseTokenBalance();
            const formatted = amount
                ? ethers.utils.formatEther(amount)
                : "0";
            setPowerhouse(Number(formatted))
        } catch (err) {
            console.log("view error", err);
        }
    }

    const getTotalUserDeposit = async () => {
        if (!address) return;
        try {
            const amount = await readContract.totalUserStake(0, address);
            const formatted = amount
            ? ethers.utils.formatEther(amount)
            : "0";
            console.log('userDeposit', formatted)
            setUserDeposit(Number(formatted))
        } catch (err) {
            console.log("user deposit", err);
        }
    }

    // const getTotalRoundDeposit = async () => {
    //     try {
    //         const amount = await readContract.allOverStakeAmount();
    //         // console.log('OverALL Round Deposit', amount)
    //         const formatted = amount
    //             ? ethers.utils.formatEther(amount)
    //             : "0";
    //         setTotalDeposit(Number(formatted))
    //     } catch (err) {
    //         console.log("overall error", err);
    //     }
    // }

    useEffect(() => {
        const fetchAll = () => {
            getPowerhouseBalance();
            // getTotalRoundDeposit();
            if (address) getTotalUserDeposit();
        };

        fetchAll();
        const interval = setInterval(fetchAll, 5000);
        return () => clearInterval(interval);
    }, [address]);
    return (
        <div className="flex flex-col justify-between">
            <div className="px-4 lg:px-8 pt-4 md:pt-8 pb-10">
                <div className="p-1.25 bg-black-5 border border-black-15 rounded-md stats-shadow">
                    <div className="grid grid-cols-2">
                        <div className="p-1.25 pb-3 text-center space-y-2 border-r border-black-15">
                            <P12 className="text-black-60">PowerHouse</P12>
                            <div className="flex items-center justify-center gap-1">
                                <Image src="/media/Logo.svg" alt="plt" height={16} width={16} />
                                <P14 className="font-semibold">{powerhouse}</P14>
                            </div>
                        </div>
                        <div className="p-1.25 pb-3 text-center space-y-2">
                            <P12 className="text-black-60">Time Remaining</P12>
                            <P14 className="font-semibold text-danger">
                                {
                                    timer > 0 ? `00:${timer}` : 'waiting...'
                                }
                            </P14>
                        </div>
                    </div>
                    <div className="border-t border-black-15 w-1/2 mx-auto"></div>
                    <div className="grid grid-cols-2">
                        <div className="p-1.25 pt-3 text-center space-y-2 border-r border-black-15">
                            <P12 className="text-black-60">Total Deposit</P12>
                            <div className="flex items-center justify-center gap-1">
                                <Image src="/media/monad-logo.svg" alt="plt" height={16} width={16} />
                                <P14 className="font-semibold">{totalDeposit}</P14>
                            </div>
                        </div>
                        <div className="p-1.25 pt-3 text-center space-y-2">
                            <P12 className="text-black-60">Your Deposit</P12>
                            <div className="flex items-center justify-center gap-1">
                                <Image src="/media/monad-logo.svg" alt="plt" height={16} width={16} />
                                <P14 className="font-semibold">{userDeposit}</P14>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="deposit mt-6">
                    <div className="grid grid-cols-5 gap-4">
                        {["0.01", "100", "500", "1000", '5000'].map((val) => (
                            <Button
                                key={val}
                                variant="outline"
                                size="sm"
                                className="hover:bg-primary hover:text-background cursor-pointer text-xs font-medium"
                                onClick={() => setAmount(val)}
                            >
                                +{Number(val)}
                            </Button>
                        ))}
                    </div>
                    <div className="flex items-center gap-3.5 w-full mt-3">
                        <div className="flex items-center gap-4 border-[1.5px] border-black-5 rounded-md px-2.75 py-1 w-full bg-background input-shadow">
                            <input
                                type="text"
                                placeholder="0.00"
                                className="text-base font-extrabold w-full focus:outline-none font-onest h-none"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                inputMode="decimal"
                                onKeyDown={handleKeyPress}
                            />
                            <div className="flex items-center gap-1">
                                <MdOutlineWallet size={28} />
                                <P14 className="font-medium">{balance.toFixed(3)}</P14>
                                <Image src="/media/monad-logo.svg" alt="logo" height={12} width={12} className="rounded-full" />
                            </div>
                        </div>


                        {
                            isConnected ?
                                <Button
                                    onClick={() => handleDeposit()}
                                    disabled={!amount || selectedIndexes.length === 0 || timer === 0}
                                    className="z-50"
                                    variant="secondary"
                                >
                                    {isDepositing ? <Spinner /> : 'Deposit'}
                                </Button>
                                :
                                <WalletButton />
                        }
                    </div>
                    <div className="bg-black-5 rounded-[12px] p-3 space-y-4 mt-6">
                        <div className="flex items-center justify-between gap-2">
                            <P12 className="text-black-60">Block</P12>
                            <P14 className="font-semibold">x{selectedIndexes.length}</P14>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <P12 className="text-black-60">Total Deposit</P12>
                            <div className="flex items-center justify-end gap-1">
                                <P14 className="font-semibold">{selectedIndexes.length * Number(amount)}</P14>
                                <Image src="/media/monad-logo.svg" alt="plt" height={16} width={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-black-25"></div>
            <div className="bottom-0 px-4 lg:px-8 mt-4 md:mt-8 lg:mt-14">
                <div className="border bg-black-5 border-black-15 stats-shadow rounded-md p-1.25">
                    <div
                        className="bg-black-5 p-1.25 rounded-md stats-shadow border border-black-15 bg-no-repeat bg-position-[50%_80%]"
                        style={{ backgroundImage: 'url("/media/reward.svg")' }}
                    >
                        <div className="p-1.25 pt-3 space-y-2">
                            <P12 className="text-black-60 flex items-center gap-1.5 justify-center">MON Reward <LuInfo size={14} className="text-foreground" /></P12>
                            <div className="flex items-center justify-center gap-1">
                                <Image src="/media/monad-logo.svg" alt="plt" height={16} width={16} />
                                <P14 className="font-semibold">67.3</P14>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="p-1.25 pt-3 text-center space-y-2">
                                <P12 className="text-black-60 flex items-center justify-center gap-1.5">Unrefined PLT <LuInfo size={14} className="text-foreground" /></P12>
                                <div className="flex items-center justify-center gap-1">
                                    <Image src="/media/Logo.svg" alt="plt" height={16} width={16} />
                                    <P14 className="font-semibold">67.3</P14>
                                </div>
                            </div>
                            <div className="p-1.25 pt-3 text-center space-y-2">
                                <P12 className="text-black-60 flex items-center justify-center gap-1.5">Refined PLT <LuInfo size={14} className="text-foreground" /></P12>
                                <div className="flex items-center justify-center gap-1">
                                    <Image src="/media/Logo.svg" alt="plt" height={16} width={16} />
                                    <P14 className="font-semibold">67.3</P14>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-4 items-center justify-between mt-2">
                        <Button>Claim MON</Button>
                        <Button variant="secondary">Claim all</Button>
                        <Button variant="outline"><RiTwitterXFill />Share</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}