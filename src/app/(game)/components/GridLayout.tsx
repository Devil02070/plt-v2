'use client'
import { H2, P12, P16 } from "@/components/typography"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { CiUser } from "react-icons/ci"

interface GridProps {
    selectedIndexes: number[]
    setSelectedIndexes: Dispatch<SetStateAction<number[]>>
    toggleSelected: (index: number) => void
    amountBoxes: number[]
}
export default function GridLayout({ selectedIndexes, setSelectedIndexes, toggleSelected, amountBoxes }: GridProps) {
    return (
        <div className="space-y-4 mt-6 md:mt-8 2xl:mt-10 px-4 md:px-0">
            <div className="flex items-center justify-between max-w-[322px] md:max-w-[424px] 2xl:max-w-[562px] mx-auto">
                <P16 className="font-extrabold">Round #56,895</P16>
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
                    const border = isSelected ? 'border-black' : 'border-black-15 unselected-shadow'
                    return (
                        <div key={i} className="border-[1.25px] border-black-15 rounded-lg transition-all duration-300 h-15 w-15 md:h-19.5 md:w-19.5 2xl:h-27 2xl:w-27 flex items-center justify-center" onClick={() => toggleSelected(i)}>
                            <div className={`border rounded-md bg-grey-100 overflow-hidden grid items-center h-13.25 w-13.25 md:h-17.5 md:w-17.5 2xl:h-25 2xl:w-25 cursor-pointer ${border}`}>
                                <div>
                                    <div className="flex px-1 items-center justify-center md:justify-between mt-1 2xl:mt-2 gap-1">
                                        <P12 className="font-light">#{i + 1}</P12>
                                        <P12 className="font-light bg-black-15 rounded p-px 2xl:p-1 hidden lg:flex items-center gap-0.5 2xl:gap-1 "><CiUser />999</P12>
                                    </div>

                                    <H2 className={`text-center font-bold ${hasAmount ? 'mt-px md:mt-1.5 2xl:mt-4' : 'mt-4'} `}>234.53</H2>
                                    {
                                        (hasAmount && amountBoxes.length > 0) &&
                                        <div className="flex py-0.5 md:py-1.5 2xl:py-3 justify-center gap-1 items-center bg-grey-200 mt-px md:mt-1 2xl:mt-1.5">
                                            <Image src="/media/monad-logo.svg" alt="monad-logo" height={16} width={16} className="h-2 w-2 md:h-3 md:w-3 2xl:h-4 2xl:w-4" />
                                            <P12 className="font-normal">{amountBoxes[i]}</P12>
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
// 'use client'
// import { H2, P12, P16 } from "@/components/typography"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import { Dispatch, SetStateAction } from "react"
// import { CiUser } from "react-icons/ci"

// interface GridProps {
//     selectedIndexes: number[]
//     setSelectedIndexes: Dispatch<SetStateAction<number[]>>
//     toggleSelected: (index: number) => void
//     amountBoxes: number[]
// }
// export default function GridLayout({ selectedIndexes, setSelectedIndexes, toggleSelected, amountBoxes }: GridProps) {
//     return (
//         <div className="space-y-4 mt-6 md:mt-8 2xl:mt-10 px-4 md:px-0">
//             <div className="flex items-center justify-between max-w-[322px] md:max-w-[424px] 2xl:max-w-[562px] mx-auto">
//                 <P16 className="font-extrabold">Round #56,895</P16>
//                 {
//                     selectedIndexes.length === 25 ?
//                         <Button variant="secondary" onClick={() => setSelectedIndexes([])}>Unselect all</Button>
//                         :
//                         <Button variant="secondary" onClick={() => setSelectedIndexes(Array.from({ length: 25 }).map((_, i) => i))}>Select all</Button>
//                 }
//             </div>
//             <div className="grid grid-cols-5 gap-1 md:gap-2 w-full max-h-[322px] max-w-[322px] md:max-w-[424px] md:max-h-[424px] 2xl:max-w-[562px] 2xl:max-h-[562px] mx-auto">
//                 {Array.from({ length: 25 }).map((_, i) => {
//                     const isSelected = selectedIndexes.includes(i);
//                     const border = isSelected ? 'border-black' : 'border-black-15 unselected-shadow'
//                     const hasAmount = amountBoxes[i] !== 0;
//                     return (
//                         <div key={i} className="border-[1.25px] border-black-15 rounded-lg transition-all duration-300 h-15 w-15 md:h-19.5 md:w-19.5 2xl:h-27 2xl:w-27 flex items-center justify-center" onClick={() => toggleSelected(i)}>
//                             <div className={`border rounded-md bg-grey-100 overflow-hidden grid items-center h-13.25 w-13.25 md:h-17.5 md:w-17.5 2xl:h-25 2xl:w-25 cursor-pointer ${border}`}>
//                                 <div>
//                                     <div className="flex px-1 items-center justify-center md:justify-between mt-1 2xl:mt-2 gap-1">
//                                         <P12 className="font-light">#{i + 1}</P12>
//                                         <P12 className="font-light bg-black-15 rounded p-px 2xl:p-1 hidden lg:flex items-center gap-0.5 2xl:gap-1 "><CiUser />999</P12>
//                                     </div>

//                                     <H2 className={`text-center font-bold ${hasAmount ? 'mt-px md:mt-1.5 2xl:mt-4' : 'mt-4'} `}>234.53</H2>
//                                     {
//                                         hasAmount &&
//                                         <div className="flex py-0.5 md:py-1.5 2xl:py-3 justify-center gap-1 items-center bg-grey-200 mt-px md:mt-1 2xl:mt-1.5">
//                                             <Image src="/media/monad-logo.svg" alt="monad-logo" height={16} width={16} className="h-2 w-2 md:h-3 md:w-3 2xl:h-4 2xl:w-4" />
//                                             <P12 className="font-normal">{amountBoxes[i]}</P12>
//                                         </div>
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }