'use client'
import { H1, H2, P12, P14 } from "@/components/typography";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShortAddress } from "@/lib/utils";
import Image from "next/image";
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import { Button } from "@/components/ui/button";
dayjs.extend(relativeTime)
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MiningData } from "@/utils/types";
import { ethers } from "ethers";
import { RiFileList3Line } from "react-icons/ri";

interface MiningTableProps {
    mining: MiningData[]
}
export default function MiningTable({ mining }: MiningTableProps) {
    const tableHeadings = ['Round', 'Box', 'Token Winner', 'Winners', 'Deposit', 'Vaulted', 'Winnings', 'Powerhouse', 'Time']
    return (
        <div className="mt-8 md:mt-12">
            <div className="space-y-2">
                <H1 className="font-bold">Mining</H1>
                <P14 className="text-black-60">Recent Mining activity</P14>
            </div>
            <div className="mt-6 relative overflow-y-auto">
                {
                    mining.length === 0 ?
                        <div className="border border-black-15 rounded-md bg-primary-5 p-20 stats-shadow">
                            <div className="flex items-center flex-col gap-4 justify-center text-black-60">
                                <RiFileList3Line size={40} />
                                <H1 className="font-bold text-xl text-black-60"> No Mining Data Yet.</H1>
                            </div>
                        </div>
                        :
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow>
                                    {
                                        tableHeadings.map((item, i) => {
                                            const align = i === 0 ? 'text-start' : i === tableHeadings.length - 1 ? 'text-end' : 'text-center'
                                            return (
                                                <TableHead key={i}><P12 className={`text-black-60 ${align}`}>{item}</P12></TableHead>
                                            )
                                        })
                                    }
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    mining.map((item, i) => {
                                        const depositAmount = Number(ethers.utils.formatEther(`${item.deposit}`)).toFixed(3)
                                        const winningAmount = Number(ethers.utils.formatEther(`${item.winnings}`)).toFixed(3)
                                        const vaulted = Number(ethers.utils.formatEther(`${item.vaulted}`)).toFixed(3)
                                        const powerHouse = Number(ethers.utils.formatEther(`${item.powerhouse}`)).toFixed(3)
                                        return (
                                            <TableRow key={i}>
                                                <TableCell>
                                                    <P14 className="font-medium text-black-60">#{item.id}</P14>
                                                </TableCell>
                                                <TableCell>
                                                    <P14 className="font-medium text-black-60 text-center">#{item.win_idx}</P14>
                                                </TableCell>
                                                <TableCell>
                                                    <P14 className="font-medium text-black-60 uppercase text-center">{item.plt_winner_addr ? ShortAddress(item.plt_winner_addr) : '-'}</P14>
                                                </TableCell>
                                                <TableCell>
                                                    <P14 className="font-medium text-black-60 text-center">{item.winners_count}</P14>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-1 px-2">
                                                        <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} className="rounded-full" />
                                                        <P14 className="font-semibold">{depositAmount}</P14>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-1 px-2">
                                                        <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} className="rounded-full" />
                                                        <P14 className="font-semibold">{vaulted}</P14>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-1 px-2">
                                                        <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} className="rounded-full" />
                                                        <P14 className="font-semibold">{winningAmount}</P14>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="pe-0 text-center">
                                                    {
                                                        item.powerhouse ?
                                                            <div className="flex items-center justify-center gap-1 px-2">
                                                                <Image src="/media/Logo.svg" alt="logo" height={16} width={16} />
                                                                <P12 className="font-semibold">{powerHouse}</P12>
                                                            </div>
                                                            :
                                                            <P12 className="font-semibold">-</P12>
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    <P14 className="font-medium text-black-60 text-right">{dayjs.unix(item.ts).fromNow()}</P14>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                }
            </div>
            <div className="w-fit mx-auto flex items-center gap-6 mt-6">
                <Button variant="outline" size="sm" className="px-2 rounded-md"><IoIosArrowBack /></Button>
                <P14 className="font-medium text-[#979797]">Page 1/5</P14>
                <Button variant="outline" size="sm" className="px-2 rounded-md"><IoIosArrowForward size={16} /></Button>
            </div>
        </div>
    )
}


// {
//                             Array.from({ length: 10 }).map((_, i) => {
//                                 return (
//                                     <TableRow key={i}>
//                                         <TableCell>
//                                             <P14 className="font-medium text-black-60">#67,890,123</P14>
//                                         </TableCell>
//                                         <TableCell>
//                                             <P14 className="font-medium text-black-60 text-center">#5</P14>
//                                         </TableCell>
//                                         <TableCell>
//                                             <P14 className="font-medium text-black-60 uppercase text-center">{ShortAddress('sdfsd33d33')}</P14>
//                                         </TableCell>
//                                         <TableCell>
//                                             <P14 className="font-medium text-black-60 text-center">347</P14>
//                                         </TableCell>
//                                         <TableCell>
//                                             <div className="flex items-center justify-center gap-1 px-2">
//                                                 <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} className="rounded-full" />
//                                                 <P14 className="font-semibold">{34.3}</P14>
//                                             </div>
//                                         </TableCell>
//                                         <TableCell>
//                                             <div className="flex items-center justify-center gap-1 px-2">
//                                                 <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} className="rounded-full" />
//                                                 <P14 className="font-semibold">{34.3}</P14>
//                                             </div>
//                                         </TableCell>
//                                         <TableCell>
//                                             <div className="flex items-center justify-center gap-1 px-2">
//                                                 <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} className="rounded-full" />
//                                                 <P14 className="font-semibold">{34.3}</P14>
//                                             </div>
//                                         </TableCell>
//                                         <TableCell className="pe-0 text-center">
//                                             -
//                                             {/* <div className="flex items-center justify-center gap-1 px-2">
//                                                 <Image src="/media/Logo.svg" alt="logo" height={16} width={16} />
//                                                 <P12 className="font-semibold">{34.3}</P12>
//                                             </div> */}
//                                         </TableCell>
//                                         <TableCell>
//                                             <P14 className="font-medium text-black-60 text-right">{dayjs.unix(1764572374).fromNow()}</P14>
//                                         </TableCell>
//                                     </TableRow>
//                                 )
//                             })
//                         }