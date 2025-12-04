import { H1, P12 } from "@/components/typography";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShortAddress } from "@/lib/utils";
import { EventData } from "@/utils/types";
import { ethers } from "ethers";
import Image from "next/image";
import { RiFileList3Line } from "react-icons/ri";


interface WinnersProps {
    gameEndData: EventData[]
}
export default function Winners({ gameEndData }: WinnersProps) {
    if (!gameEndData) {
        return (
            <div className="flex items-center flex-col gap-4 justify-center h-full py-40 text-black-60">
                <RiFileList3Line size={40} />
                <H1 className="font-bold text-xl text-black-60"> No Winners Yet.</H1>
            </div>
        )
    };
    return (
        <div className="px-4 md:px-6 lg:px-8 mt-8">
            <div className="flex items-center justify-between">
                <H1 className="font-bold">Winners</H1>
                <H1 className="font-bold">Round #56,894</H1>
            </div>
            <div className="mt-4 pt-0 relative max-h-100 md:max-h-[calc(100vh-315px)] overflow-y-auto scrollbar-hide">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="ps-0">
                                <P12 className="text-black-60">Users</P12>
                            </TableHead>
                            <TableHead >
                                <P12 className="text-black-60">Invested</P12>
                            </TableHead>
                            <TableHead className="text-end pe-0">
                                <P12 className="text-black-60">Won</P12>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* {
                            gameEndData[0].users.map((user, i) => {
                                const isOneWinner = gameEndData[0].one_plt_winner ?? undefined

                                //mon reward
                                const reward = gameEndData[0].amounts[i];
                                const formattedMonReward = ethers.utils.formatEther(`${reward}`);

                                // single plt winner
                                const plt_reward = gameEndData[0].one_plt_winner_amt;
                                const formattedSinglePltWinner = ethers.utils.formatEther(plt_reward);

                                //split plt winners
                                const split_plt_reward = gameEndData[0].plt[i]
                                const rewardBN = split_plt_reward
                                    ? ethers.BigNumber.from(split_plt_reward)
                                    : ethers.BigNumber.from(0);
                                const formattedPltReward = ethers.utils.formatEther(rewardBN);

                                //invested amount
                                const investedAmt = gameEndData[0].invested[i]
                                const formattedInvested = ethers.utils.formatEther(investedAmt);
                                return (
                                    <TableRow key={i}>
                                        <TableCell className="ps-0">
                                            <P12 className="font-normal text-black-60 uppercase">{ShortAddress(user)}</P12>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-1 px-2">
                                                <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} />
                                                <P12 className="font-medium">{formattedInvested}</P12>
                                            </div>
                                        </TableCell>
                                        <TableCell className="pe-0">
                                            <div className="flex items-center justify-end gap-1">
                                                <Image src="/media/Logo.svg" alt="logo" height={16} width={16} />
                                                {
                                                    !isOneWinner ?
                                                        <P12 className="font-medium">{formattedSinglePltWinner} +</P12>
                                                        : (user === isOneWinner) ?
                                                            <P12 className="font-medium">{formattedPltReward} +</P12>
                                                            : '-'
                                                }
                                                <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} />
                                                <P12 className="font-medium">{formattedMonReward}</P12>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        } */}
                        {
                            Array.from({ length: 30 }).map((_, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell className="ps-0">
                                            <P12 className="font-normal text-black-60 uppercase">{'dummy'}</P12>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-1 px-2">
                                                <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} />
                                                <P12 className="font-medium">{34.3}</P12>
                                            </div>
                                        </TableCell>
                                        <TableCell className="pe-0">
                                            <div className="flex items-center justify-end gap-1">
                                                <Image src="/media/Logo.svg" alt="logo" height={16} width={16} />
                                                <P12 className="font-medium">- +</P12>
                                                <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} />
                                                <P12 className="font-medium">-</P12>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}