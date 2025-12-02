'use client'
import { useState } from "react";
import { BsCopy } from "react-icons/bs";
import { IoCheckmarkDone } from "react-icons/io5";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";
import { P14 } from "./typography";
type CopyProps = {
    address: string
}
export default function CopyAddress({ address }: CopyProps) {
    const [copiedText, copy] = useCopyToClipboard()
    const [copied, setCopied] = useState(false)
    function handleCopy(text: string) {
        copy(text)
            .then(() => {
                console.log('Copied!', { text: copiedText })
                setCopied(true)
                setTimeout(() => {
                    setCopied(false)
                }, 3000)
            })
            .catch(error => {
                toast.error("Failed to copy")
                console.error('Failed to copy!', error)
                setCopied(false)
            })
    }
    return (

        <div className="flex items-center justify-between w-full" onClick={() => handleCopy(address)} >
            <P14 className="font-medium">Copy Address</P14>
            {
                !copied ?
                    <BsCopy className="text-black" />
                    :
                    <IoCheckmarkDone className="text-green-600" />
            }
        </div>

    )
}