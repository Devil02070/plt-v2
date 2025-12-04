'use client'
import { H2, P12, P16 } from "@/components/typography"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { CiUser } from "react-icons/ci"
import { motion } from 'framer-motion'
import { ethers } from "ethers"

interface GridProps {
    selectedIndexes: number[]
    setSelectedIndexes: Dispatch<SetStateAction<number[]>>
    toggleSelected: (index: number) => void
    amountBoxes: number[];
    isEnded: boolean;
    showWinner: boolean;
    winningIndex: number | null;
    users: number[];
    amounts: string[];
    currentRound: number;
}
export default function GridLayout({ selectedIndexes, setSelectedIndexes, toggleSelected, amountBoxes, isEnded, showWinner, winningIndex, users, amounts, currentRound }: GridProps) {
    return (
        <div className="space-y-4 mt-6 md:mt-8 2xl:mt-10 px-4 md:px-0">
            <div className="flex items-center justify-between max-w-[322px] md:max-w-[424px] 2xl:max-w-[562px] mx-auto">
                <P16 className="font-extrabold">Round #{currentRound}</P16>
                {
                    selectedIndexes.length === 25 ?
                        <Button variant="secondary" onClick={() => setSelectedIndexes([])}>Unselect all</Button>
                        :
                        <Button variant="secondary" onClick={() => setSelectedIndexes(Array.from({ length: 25 }).map((_, i) => i))}>Select all</Button>
                }
            </div>
            <div className="grid grid-cols-5 gap-1 md:gap-2 w-full max-h-[322px] max-w-[322px] md:max-w-[424px] md:max-h-[424px] 2xl:max-w-[562px] 2xl:max-h-[562px] mx-auto">
                {Array.from({ length: 25 }).map((_, i) => {
                    const isSelected = selectedIndexes.includes(i);
                    const hasAmount = amountBoxes[i] !== 0;
                    const isWinner = winningIndex === i;
                    const randomDelay = Math.random() * 2; // stagger fade
                    const totalAmount = amounts[i]
                        ? ethers.utils.formatEther(amounts[i])
                        : "0";
                    const formattedTotalAmount = (Number(totalAmount) >= 1000) ? `${(Number(totalAmount) / 1000).toFixed(2)} K` : `${Number(totalAmount).toFixed(2)}`;

                    const outerBorder = isWinner && showWinner && hasAmount ? 'border-primary' : 'border-black-15'
                    const innerBorder = isWinner && showWinner ? 'border-primary' : isSelected ? 'border-black' : 'border-black-15 unselected-shadow'
                    const bgColor = isWinner && showWinner ? 'bg-primary-10' : isSelected ? 'bg-background' : 'bg-grey-100'
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 1, scale: 1 }}
                            animate={
                                isEnded
                                    ? isWinner
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0, scale: 0.8 }
                                    : { opacity: 1, scale: 1 }
                            }
                            // animate={
                            //     isEnded && isWinner
                            //         ? { opacity: 0, scale: 0.8 }
                            //         : { opacity: 1, scale: 1 }
                            // }
                            transition={
                                isEnded && !isWinner
                                    ? { duration: 2, delay: randomDelay }
                                    : { duration: 3 }
                            }
                            onClick={() => toggleSelected(i)}
                        >
                            <div className={`border-[1.25px] rounded-lg transition-all duration-300 h-15 w-15 md:h-19.5 md:w-19.5 2xl:h-27 2xl:w-27 flex items-center justify-center ${outerBorder}`}>
                                <div className={`border rounded-md overflow-hidden grid items-center h-13.25 w-13.25 md:h-17.5 md:w-17.5 2xl:h-25 2xl:w-25 cursor-pointer ${innerBorder} ${bgColor}`}>
                                    <div>
                                        <div className="flex px-1 items-center justify-center md:justify-between mt-1 2xl:mt-2 gap-1">
                                            <P12 className="font-light">#{i + 1}</P12>
                                            <P12 className="font-light bg-black-15 rounded p-px 2xl:p-1 hidden lg:flex items-center gap-0.5 2xl:gap-1 "><CiUser />{users[i]}</P12>
                                        </div>

                                        <H2 className={`text-center font-bold ${hasAmount ? 'mt-px md:mt-1.5 2xl:mt-4' : 'mt-4'} `}>{formattedTotalAmount}</H2>
                                        {
                                            (hasAmount && amountBoxes.length > 0) &&
                                            <div className={`flex py-0.5 md:py-1.5 2xl:py-2.5 justify-center gap-1 items-center mt-px md:mt-1 2xl:mt-1 ${(isWinner && showWinner) ? 'bg-primary-90 text-white' : 'bg-grey-200'}`}>
                                                {
                                                    isWinner && showWinner ?
                                                        <Image src="/media/monad-logo-light.svg" alt="monad-logo" height={16} width={16} className="h-2 w-2 md:h-3 md:w-3 2xl:h-4 2xl:w-4" />
                                                        :
                                                        <Image src="/media/monad-logo.svg" alt="monad-logo" height={16} width={16} className="h-2 w-2 md:h-3 md:w-3 2xl:h-4 2xl:w-4" />
                                                }
                                                <P12 className={`${(isWinner && showWinner) ? 'bg-primary-90 text-white' : 'text-foreground'}`}>{amountBoxes[i]}</P12>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}