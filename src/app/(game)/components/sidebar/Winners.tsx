import { H1, P12 } from "@/components/typography";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShortAddress } from "@/lib/utils";
import Image from "next/image";

export default function Winners() {
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
                        {
                            Array.from({ length: 30 }).map((_, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell className="ps-0">
                                            <P12 className="font-normal text-black-60 uppercase">{ShortAddress('oxerfdiofsdn3o4n343')}</P12>
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
                                                <P12 className="font-medium">34.23 +</P12>
                                                <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} />
                                                <P12 className="font-medium">34.78</P12>
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

// {
//                             gameEndData[0].users.map((user, i) => {
//                                 const isOneWinner = gameEndData[0].one_plt_winner ?? undefined

//                                 //mon reward
//                                 const reward = gameEndData[0].amounts[i];
//                                 console.log('reward', reward)
//                                 // const rewardMon = reward
//                                 //     ? ethers.BigNumber.from(reward)
//                                 //     : ethers.BigNumber.from(0);
//                                 const formattedMonReward = ethers.utils.formatEther(`${reward}`);
//                                 console.log('formatted', formattedMonReward)

//                                 // single plt winner
//                                 const plt_reward = gameEndData[0].one_plt_winner_amt;
//                                 const formattedSinglePltWinner = ethers.utils.formatEther(plt_reward);

//                                 //split plt winners
//                                 const split_plt_reward = gameEndData[0].plt[i]
//                                 const rewardBN = split_plt_reward
//                                     ? ethers.BigNumber.from(split_plt_reward)
//                                     : ethers.BigNumber.from(0);
//                                 const formattedPltReward = ethers.utils.formatEther(rewardBN);

//                                 //invested amount
//                                 const investedAmt = gameEndData[0].invested[i]
//                                 const formattedInvested = ethers.utils.formatEther(investedAmt);


//                                 return (
//                                     <TableRow key={i}>
//                                         <TableCell>
//                                             <P12 className="font-medium text-gray-70">{shortenAddress(user)}</P12>
//                                         </TableCell>
//                                         <TableCell>
//                                             <div className="flex items-center gap-1 px-2">
//                                                 <Image src="/media/token.svg" alt="logo" height={16} width={16} className="rounded-full" />
//                                                 <P12 className="font-bold">{formatTinyEth(Number(formattedInvested))}</P12>
//                                             </div>
//                                         </TableCell>
//                                         <TableCell>
//                                             <div className="flex items-center justify-end gap-1">
//                                                 <Image src="/media/logo-icon.svg" alt="logo" height={16} width={16} className="rounded-full" />
//                                                 {
//                                                     !isOneWinner ?
//                                                         <P12 className="font-bold">{formattedSinglePltWinner} +</P12>
//                                                         : (user === isOneWinner) ?
//                                                             <P12 className="font-bold">{formattedPltReward} +</P12>
//                                                             : '-'
//                                                 }
//                                                 <Image src="/media/token.svg" alt="logo" height={16} width={16} className="rounded-full" />
//                                                 <P12 className="font-bold">{formatTinyEth(Number(formattedMonReward))}</P12>
//                                             </div>
//                                         </TableCell>
//                                     </TableRow>
//                                 )
//                             })
//                         }