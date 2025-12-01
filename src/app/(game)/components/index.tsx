'use client'
import { useEffect, useState } from "react";
import GridLayout from "./GridLayout";
import MineTab from "./sidebar/MineTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Winners from "./sidebar/Winners";
import { toast } from "sonner";

export default function Body() {
    const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
    const [amountBoxes, setAmountBoxes] = useState<number[]>(Array.from({ length: 25 }).map(() => 0))
    const [amount, setAmount] = useState('')
    const [timer, setTimer] = useState(0)

    const toggleSelected = (index: number) => {
        setSelectedIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        )
    }

    const handleDeposit = async () => {
        try {
            if (selectedIndexes.length === 0) {
                toast.error('selected blocks first')
                return;
            };
            // const splitAmount = ethers.utils.parseEther(amount.toString());
            // const amountsPerBox = selectedIndexes.map(() => Number(splitAmount));

            const splitAmount = amount;
            const amountsPerBox = selectedIndexes.map(() => splitAmount)
            console.log('selected blocks', selectedIndexes)
            console.log('amount blocks', amountsPerBox)

            // const writeContract = await getWriteContract();
            // if (!writeContract) {
            //     toast.error('null')
            //     return;
            // };
            // const transaction = await writeContract.stake(selectedIndexes, amountsPerBox, {
            //     value: splitAmount
            // });
            // console.log('write response', transaction)

            setAmountBoxes(prev =>
                prev.map((val, idx) =>
                    selectedIndexes.includes(idx)
                        ? val + Number(amount)
                        : val
                )
            );
            setSelectedIndexes([])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log("Updated amountBoxes", amountBoxes)
    }, [amountBoxes])
    return (
        <section className="mt-18 xl:mt-20 xl:h-[calc(100vh-122px)] overflow-hidden">
            <div className="flex flex-wrap md:flex-nowrap h-full">
                <div className="w-full md:h-[calc(100vh-122px)] overflow-y-auto scrollbar-hide pb-6 md:pb-0">
                    <GridLayout
                        selectedIndexes={selectedIndexes}
                        setSelectedIndexes={setSelectedIndexes}
                        toggleSelected={toggleSelected}
                        amountBoxes={amountBoxes}
                    />
                </div>
                <div className="sidebar w-full md:w-fit md:min-w-xs lg:min-w-md border-l border-primary bg-grey-100 md:h-[calc(100vh-116px)] xl:h-[calc(100vh-122px)] overflow-y-auto pb-4 md:pb-10">
                    <Tabs defaultValue="mine" className="w-full gap-0">
                        <TabsList className="border-[1.25px] rounded-[12px] p-1 border-black-25 bg-primary-15 mx-auto  mt-6 md:mt-10 ">
                            <TabsTrigger value="mine">Mine</TabsTrigger>
                            <TabsTrigger value="last-round">Last Round</TabsTrigger>
                        </TabsList>
                        <TabsContent value="mine" className="h-full relative">
                            <MineTab
                                amount={amount}
                                setAmount={setAmount}
                                handleDeposit={handleDeposit}
                                timer={timer}
                                selectedIndexes={selectedIndexes}
                            />
                        </TabsContent>
                        <TabsContent value="last-round">
                            <Winners />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}