'use client'
import { H1, P12, P14 } from "@/components/typography";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function BuyBackTable() {
    const tableHeadings = ['Time', 'MON Spent', 'PLT Buried', 'Stake Yield']
    return (
        <div className="mt-8 md:mt-12">
            <div className="space-y-2">
                <H1 className="font-bold">Buy Back</H1>
                <P14 className="text-black-60">Review Buyback transactions.</P14>
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
                                            <P14 className="font-medium text-black-60">{dayjs.unix(1764572374).fromNow()}</P14>
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
                                        <TableCell className="pe-0 text-center">
                                            <div className="flex items-center justify-end gap-1 px-2">
                                                <Image src="/media/Logo.svg" alt="logo" height={16} width={16} />
                                                <P14 className="font-semibold">{34.3}</P14>
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