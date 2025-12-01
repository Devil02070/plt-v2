'use client'
import { P12, P14 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { handleKeyPress } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineWallet } from "react-icons/hi2";

export default function Unstake() {
    const [amount, setAmount] = useState('')
    return (
        <>
            <div className="p-1.25 bg-black-5 border border-black-15 rounded-md stats-shadow mt-8">
                <div className="grid grid-cols-2">
                    <div className="p-1.25 pb-3 text-center space-y-2 border-r border-black-15">
                        <P12 className="text-black-60">Total Staked</P12>
                        <div className="flex items-center justify-center gap-1">
                            <Image src="/media/Logo.svg" alt="plt" height={16} width={16} />
                            <P14 className="font-semibold">67.3M</P14>
                        </div>
                    </div>
                    <div className="p-1.25 pb-3 text-center space-y-2">
                        <P12 className="text-black-60">Your Stakes</P12>
                        <div className="flex items-center justify-center gap-1">
                            <Image src="/media/Logo.svg" alt="plt" height={16} width={16} />
                            <P14 className="font-semibold">00</P14>
                        </div>
                    </div>
                </div>
                <div className="border-t border-black-15 w-1/2 mx-auto"></div>
                <div className="grid grid-cols-2">
                    <div className="p-1.25 pt-3 text-center space-y-2 border-r border-black-15">
                        <P12 className="text-black-60">TVL</P12>
                        <P14 className="font-semibold">$67.3K</P14>
                    </div>
                    <div className="p-1.25 pt-3 text-center space-y-2">
                        <P12 className="text-black-60">APR</P12>
                        <P14 className="font-bold">7.16% APY</P14>
                    </div>
                </div>
            </div>
            <div className="mt-6 md:mt-8">
                <div className="flex items-center justify-between gap-2">
                    <P12 className="text-black-60">UnStake</P12>
                    <div className="flex items-center gap-1 justify-center">
                        <HiOutlineWallet size={14} className="text-black-60" />
                        <P14 className="font-semibold">0.00</P14>
                        <Image src="/media/Logo.svg" alt="logo" height={16} width={16} />
                    </div>
                </div>

                <div className="py-1.75 px-2.75 border border-black-5 input-shadow mt-3 flex items-center justify-between rounded-md">
                    <input
                        type="text"
                        placeholder="0.00"
                        className="text-lg font-bold focus:outline-none w-full font-onest"
                        onKeyDown={handleKeyPress}
                        inputMode="decimal"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <Button size="sm" variant="secondary" className="rounded-md cursor-pointer p-2 w-fit">Max</Button>
                </div>
                <div className="text-center">
                    <Button className="mt-3">Withdraw</Button>
                </div>
            </div>
        </>
    )
}