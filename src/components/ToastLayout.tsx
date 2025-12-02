import { H1, P12 } from "./typography"
import { CircleAlert, CircleCheckBig, SquareArrowOutUpRight, TriangleAlert } from "lucide-react"
import Link from "next/link"

interface ToastLayoutProps {
    type: string
    title: string
    description: string
    url?: string
}
export default function ToastLayout({ type, title, description, url }: ToastLayoutProps) {
    return (
        <div className="bg-background">
            <div className="border bg-black-5 border-black-15 stats-shadow rounded-md p-1 relative z-80 ">
                <div
                    className="bg-black-5 p-2 rounded-md stats-shadow border border-black-15">
                    <div className="flex gap-4">
                        {type === 'success' && <div className="bg-[#227A0A33] rounded-full p-0.75 h-fit"><CircleCheckBig className="text-[#227A0A]" size={16} /></div>}
                        {type === 'error' && <div className="bg-[#c62d2033] rounded-full p-0.75 h-fit"><TriangleAlert className="text-danger" size={16} /></div>}
                        {type === 'failed' && <div className="bg-[#c62d2033] rounded-full p-0.75 h-fit"><CircleAlert className="text-danger" size={16} /></div>}
                        <div className="space-y-2">
                            <H1 className="font-black">{title}</H1>
                            <div className="flex gap-2 items-center">
                                <P12 className="text-black-60">{description}</P12>
                                {url &&
                                    <Link href={url} className="text-black-60 hover:text-primary"><SquareArrowOutUpRight size={16} /></Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// usecase
// toast.custom((t) => <ToastLayout type='error' title={'Success'} description={'Order placed successfully'} url={'3434'} />)