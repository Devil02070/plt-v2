'use client'
import { H1, P12, P14 } from "@/components/typography";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShortAddress } from "@/lib/utils";
import Image from "next/image";
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function PowerhouseTable() {
    const tableHeadings = ['Round', 'Box', 'Token Winner', 'Winners', 'Deposit', 'Vaulted', 'Winnings', 'Powerhouse', 'Time']
    return (
        <div className="mt-8 md:mt-12">
            <div className="space-y-2">
                <H1 className="font-bold">Powerhouse</H1>
                <P14 className="text-black-60">Recent loot activity</P14>
            </div>
            <div className="mt-6 relative overflow-y-auto">
                <Table className="w-full">
                    <TableHeader>
                        {
                            tableHeadings.map((item, i) => {
                                const align = i === 0 ? 'text-start' : i === tableHeadings.length - 1 ? 'text-end' : 'text-center'
                                return (
                                    <TableHead key={i}><P12 className={`text-black-60 ${align}`}>{item}</P12></TableHead>
                                )
                            })
                        }
                    </TableHeader>
                    <TableBody>
                        {
                            Array.from({ length: 10 }).map((_, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>
                                            <P14 className="font-medium text-black-60">#67,890,123</P14>
                                        </TableCell>
                                        <TableCell>
                                            <P14 className="font-medium text-black-60 text-center">#5</P14>
                                        </TableCell>
                                        <TableCell>
                                            <P14 className="font-medium text-black-60 uppercase text-center">{ShortAddress('sdfsd33d33')}</P14>
                                        </TableCell>
                                        <TableCell>
                                            <P14 className="font-medium text-black-60 text-center">347</P14>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center justify-center gap-1 px-2">
                                                <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} className="rounded-full" />
                                                <P14 className="font-semibold">{34.3}</P14>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center justify-center gap-1 px-2">
                                                <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} className="rounded-full" />
                                                <P14 className="font-semibold">{34.3}</P14>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center justify-center gap-1 px-2">
                                                <Image src="/media/monad-logo.svg" alt="logo" height={16} width={16} className="rounded-full" />
                                                <P14 className="font-semibold">{34.3}</P14>
                                            </div>
                                        </TableCell>
                                        <TableCell className="pe-0 text-center">
                                            <div className="flex items-center justify-center gap-1 px-2">
                                                <Image src="/media/Logo.svg" alt="logo" height={16} width={16} />
                                                <P14 className="font-semibold">{34.3}</P14>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <P14 className="font-medium text-black-60 text-right">{dayjs.unix(1764572374).fromNow()}</P14>
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