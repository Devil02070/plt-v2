'use client'
import { navitems } from "@/utils/constants";
import { H2 } from "../typography";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import WalletButton from "./WalletButton";

export default function Header() {
    const pathname = usePathname()
    return (
        <div className="bg-background fixed top-0 w-full z-50">
            <header className="border-b border-primary bg-primary-5">
                <div className="flex items-center justify-between w-full mx-auto py-3 md:py-4 px-4 md:px-6">
                    <div className="flex items-center gap-12">
                        <Link href='/' className="flex items-center gap-2">
                            <Logo />
                            <H2 className="font-bold">Plutonium</H2>
                        </Link>
                        <nav className="hidden sm:block">
                            <ul className="flex items-center gap-6">
                                {
                                    navitems.map((item, i) => {
                                        const isActive = pathname === item.url;
                                        if(item.title === 'Home') return;
                                        return (
                                            <Link href={`${item.url}`} key={i}>
                                                <li className={`font-medium ${isActive ? 'text-primary' : ''}`}>{item.title}</li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <Button>Buy</Button>
                        <WalletButton />
                    </div>
                    <MobileMenu />
                </div>
            </header>
        </div>
    )
}

const MobileMenu = () => {
    const pathname = usePathname()
    return (
        <>
            <nav className="fixed bottom-0 md:hidden w-full backdrop-blur-md py-3 px-2.5 z-50 left-0">
                <ul className="grid grid-cols-3 gap-4">
                    {
                        navitems.map((item, i) => {
                            const isActive = pathname === item.url;
                            if (item.hideMobile) return;
                            return (
                                <Link href={`${item.url}`} key={i} className={`font-medium space-y-1.5 text-center ${isActive ? 'text-primary' : ''}`}>
                                    {item.icon && <item.icon size={14} className="mx-auto" />}
                                    <li className="text-xs font-medium">{item.title}</li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}
