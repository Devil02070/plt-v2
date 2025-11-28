import Image from "next/image";

export default function Logo(){
    return(
        <Image src="/media/Logo.svg" alt="logo" height={48} width={48}/>
    )
}