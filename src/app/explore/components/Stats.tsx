import { H1, P12, P14 } from "@/components/typography";
import Image from "next/image";

export default function ExploreStats() {
    return (
        <>
            <div className="space-y-2">
                <H1 className="font-bold">Explore</H1>
                <P14 className="text-black-60">Review protocol stats and activity</P14>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 p-1.25 rounded-md bg-black-5 border border-black-15 stats-shadow max-w-5xl mx-auto mt-6 md:mt-8">
                <div className="p-1.25 pb-2.5 sm:pb-1.25 text-center space-y-3 sm:space-y-4 border-r border-black-15">
                    <P12 className="text-black-60">Max supply</P12>
                    <div className="flex items-center justify-center gap-1">
                        <Image src="/media/Logo.svg" alt="plt" height={20} width={20} />
                        <H1 className="font-bold">67.3M</H1>
                    </div>
                </div>
                <div className="p-1.25 pb-2.5 sm:pb-1.25 text-center space-y-3 sm:space-y-4 md:border-r border-black-15">
                    <P12 className="text-black-60">Circulating Supply</P12>
                    <div className="flex items-center justify-center gap-1">
                        <Image src="/media/Logo.svg" alt="plt" height={20} width={20} />
                        <H1 className="font-bold">67.3M</H1>
                    </div>
                </div>
                <div className="p-1.25 pt-2.5 sm:pt-1.25 text-center space-y-3 sm:space-y-4 border-r border-t sm:border-t-0 border-black-15">
                    <P12 className="text-black-60">Buried (7d)</P12>
                    <div className="flex items-center justify-center gap-1">
                        <Image src="/media/Logo.svg" alt="plt" height={20} width={20} />
                        <H1 className="font-bold">67.3</H1>
                    </div>
                </div>
                <div className="p-1.25 pt-2.5 sm:pt-1.25 text-center space-y-3 sm:space-y-4 border-t sm:border-t-0 border-black-15">
                    <P12 className="text-black-60">Protocol Rev (7d)</P12>
                    <div className="flex items-center justify-center gap-1">
                        <Image src="/media/monad-logo.svg" alt="plt" height={20} width={20} />
                        <H1 className="font-bold">67.3</H1>
                    </div>
                </div>
            </div>
        </>
    )
}