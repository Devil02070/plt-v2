import Image from "next/image";

export default function Logo() {
    return (
        <Image src="/media/Logo.svg" alt="logo" height={48} width={48} className="h-8 w-8 xl:h-12 xl:w-12"/>
       
    )
}