'use client'
import { P12, P14 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { handleKeyPress } from "@/lib/utils";
import Image from "next/image";
import { MdOutlineWallet } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { Dispatch, SetStateAction } from "react";

interface MineProps {
    amount: string;
    setAmount: Dispatch<SetStateAction<string>>
    handleDeposit: () => void
    timer:number;
    selectedIndexes:number[]
}
export default function MineTab({ amount, setAmount, handleDeposit, timer, selectedIndexes }: MineProps) {
    return (
        <div className="flex flex-col justify-between">
            <div className="px-4 lg:px-8 pt-4 md:pt-8 pb-10">
                <div className="p-1.25 bg-black-5 border border-black-15 rounded-md stats-shadow">
                    <div className="grid grid-cols-2">
                        <div className="p-1.25 pb-3 text-center space-y-2 border-r border-black-15">
                            <P12 className="text-black-60">PowerHouse</P12>
                            <div className="flex items-center justify-center gap-1">
                                <Image src="/media/Logo.svg" alt="plt" height={16} width={16} />
                                <P14 className="font-semibold">67.3</P14>
                            </div>
                        </div>
                        <div className="p-1.25 pb-3 text-center space-y-2">
                            <P12 className="text-black-60">Time Remaining</P12>
                            <P14 className="font-semibold text-danger">00:{timer ? timer : 0}</P14>
                        </div>
                    </div>
                    <div className="border-t border-black-15 w-1/2 mx-auto"></div>
                    <div className="grid grid-cols-2">
                        <div className="p-1.25 pt-3 text-center space-y-2 border-r border-black-15">
                            <P12 className="text-black-60">Total Deposit</P12>
                            <div className="flex items-center justify-center gap-1">
                                <Image src="/media/monad-logo.svg" alt="plt" height={16} width={16} />
                                <P14 className="font-semibold">67.3</P14>
                            </div>
                        </div>
                        <div className="p-1.25 pt-3 text-center space-y-2">
                            <P12 className="text-black-60">Your Deposit</P12>
                            <div className="flex items-center justify-center gap-1">
                                <Image src="/media/monad-logo.svg" alt="plt" height={16} width={16} />
                                <P14 className="font-semibold">67.3</P14>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="deposit mt-6">
                    <div className="grid grid-cols-5 gap-4">
                        {["50", "100", "500", "1000", '5000'].map((val) => (
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
                                {/* <P14 className="font-semibold">{balance.toFixed(2)}</P14> */}
                                <P14 className="font-medium">{230.02}</P14>
                                <Image src="/media/monad-logo.svg" alt="logo" height={12} width={12} className="rounded-full" />
                            </div>
                        </div>

                        <Button
                            onClick={() => handleDeposit()}
                            // disabled={!amount || selectedIndexes.length === 0 || timer === 0}
                            disabled={!amount || selectedIndexes.length === 0}
                            className="z-50"
                            variant="secondary"
                        >
                            {/* {isDepositing ? <Spinner /> : 'Deposit'} */}
                            Deposit
                        </Button>
                    </div>
                    <div className="bg-black-5 rounded-[12px] p-3 space-y-4 mt-6">
                        <div className="flex items-center justify-between gap-2">
                            <P12 className="text-black-60">Block</P12>
                            <P14 className="font-semibold">x0</P14>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <P12 className="text-black-60">Total Deposit</P12>
                            <div className="flex items-center justify-end gap-1">
                                <P14 className="font-semibold">67.3</P14>
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