'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Stake from "./Stake";
import Unstake from "./Unstake";

export default function Body() {
    return (
        // <section className="py-10 md:pt-10 px-4 h-[calc(100vh-130px)] overflow-y-auto">
        <section className="pt-26 md:pt-28 2xl:pt-35 pb-19 px-4 overflow-y-auto scrollbar-hide">
            <div className="w-full max-w-sm mx-auto">
                <Tabs defaultValue="stake" className="gap-0">
                    <TabsList className="mx-auto border border-black-25 bg-primary-15">
                        <TabsTrigger value="stake">Stake</TabsTrigger>
                        <TabsTrigger value="unstake">Unstake</TabsTrigger>
                    </TabsList>
                    <TabsContent value="stake">
                        <Stake />
                    </TabsContent>
                    <TabsContent value="unstake">
                        <Unstake />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}