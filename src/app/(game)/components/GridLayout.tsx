import { P12, P16 } from "@/components/typography"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CiUser } from "react-icons/ci"

export default function GridLayout() {
    return (
        <div className="space-y-4 mt-10">
            <div className="flex items-center justify-between max-w-[562px] mx-auto">
                <P16 className="font-extrabold">Round #56,895</P16>
                <Button variant="secondary">Select all</Button>
            </div>
            <div className="grid grid-cols-5 gap-2 w-full max-w-[562px] max-h-[562px] mx-auto">
                {Array.from({ length: 25 }).map((_, i) => {
                    return (
                        // <div key={i} className="border-[1.25px] border-black-15 rounded-lg p-1 hover:p-0 transition-all duration-300">
                        <div key={i} className="border-[1.25px] border-black-15 rounded-lg transition-all duration-300 h-27 w-27 flex items-center justify-center">
                            <div className="border border-black-15 rounded-md bg-grey-100 overflow-hidden grid items-center h-25 w-25 unselected-shadow">
                                <div>
                                    <div className="flex px-1 items-center justify-between mt-2">
                                        <P12 className="font-light">#{i + 1}</P12>
                                        <P12 className="font-light bg-black-25 rounded p-1 flex items-center gap-1"><CiUser />999</P12>
                                    </div>
                                    <P16 className="text-center font-extrabold mt-4">234.53</P16>
                                    {
                                        i == 10 &&
                                        <div className="flex py-3 justify-center gap-1 items-center bg-grey-200 mt-1.5">
                                            <Image src="/media/monad-logo.svg" alt="monad-logo" height={16} width={16} />
                                            <P12 className="font-normal">12.34</P12>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}