// 'use client'
// import { useEffect, useState } from "react";
// import GridLayout from "./GridLayout";
// import MineTab from "./sidebar/MineTab";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Winners from "./sidebar/Winners";
// import { toast } from "sonner";
// import useContract from "@/hooks/useContract";
// import { ethers } from "ethers";
// import { PublicRpc } from "@/utils/env";

// export default function Body() {
//     const { readContract, getWriteContract } = useContract();
//     const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
//     const [amountBoxes, setAmountBoxes] = useState<number[]>(Array.from({ length: 25 }).map(() => 0))
//     const [amount, setAmount] = useState('')
//     const [currentRound, setCurrentRound] = useState(0);

//     const [users, setUsers] = useState<number[]>([])
//     const [amounts, setAmounts] = useState<string[]>([])

//     const [timer, setTimer] = useState(30)
//     const [totalAmount, setTotalAmount] = useState(0)
//     const [winningIndex, setWinningIndex] = useState<number | null>(null)
//     const [isEnded, setIsEnded] = useState(false)
//     const [showWinner, setShowWinner] = useState(false);
//     const [isDepositing, setIsDepositing] = useState(false)

//     const [endTimestamp, setEndTimestamp] = useState(0)
//     const [currentTimestamp, setCurrentTimestamp] = useState(0)
//     // const [gameEndData, setGameEndData] = useState<EventData[]>([]);
//     const [gameStatus, setGameStatus] = useState(false)

//     const toggleSelected = (index: number) => {
//         setSelectedIndexes((prev) =>
//             prev.includes(index)
//                 ? prev.filter((i) => i !== index)
//                 : [...prev, index]
//         )
//     }
//     const getCurrentRound = async () => {
//         try {
//             const res = await readContract.currentRound()
//             console.log("current Round", res);
//             setCurrentRound(Number(res))
//         } catch (err) {
//             console.error("current ts error", err);
//         }
//     };
//     const getRoundDetails = async () => {
//         try {
//             const roundDetails = await readContract.getRoundDetails()

//             const arr1 = Array.from(roundDetails[0]);
//             const arr2 = Array.from(roundDetails[1]);

//             const users = [...arr1].map(x => Number(x));
//             const blockAmounts = [...arr2].map(x => String(x));

//             console.log('User Details 1', users)
//             console.log('Amounts Details 2', blockAmounts)

//             setUsers(users)
//             setAmounts(blockAmounts)
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     const getCurrentTimestamp = async () => {
//         try {
//             const browserProvider = new ethers.providers.JsonRpcProvider(PublicRpc);
//             const block = await browserProvider.getBlock("latest");
//             console.log("current TS", block?.timestamp);
//             setCurrentTimestamp(Number(block?.timestamp))
//         } catch (err) {
//             console.error("current ts error", err);
//         }
//     };
//     const getEndTimestamp = async () => {
//         try {
//             const res = await readContract.endGame();
//             // const endTs = ethers.BigNumber.from(res).toString();
//             console.log('End TS', Number(res))
//             setEndTimestamp(Number(res))
//         } catch (err) {
//             console.log("End ts error", err);
//         }
//     }
//     const getGameStatus = async () => {
//         try {
//             const status = await readContract.isActive();
//             console.log('game status', status)
//             setGameStatus(status)
//         } catch (err) {
//             console.log("Status error", err);
//         }
//     }

//     const handleDeposit = async () => {
//         try {
//             setIsDepositing(true)
//             if (selectedIndexes.length === 0) {
//                 toast.error('selected blocks first')
//                 return;
//             };
//             const splitAmount = ethers.utils.parseEther(amount);
//             const amountsPerBox = selectedIndexes.map(() => splitAmount);

//             // Total ETH to send in msg.value
//             const totalValue = splitAmount.mul(selectedIndexes.length);

//             console.log('split amount', splitAmount)
//             console.log('selected blocks', selectedIndexes)
//             console.log('amount blocks', amountsPerBox)

//             const writeContract = await getWriteContract();
//             if (!writeContract) {
//                 toast.error('null')
//                 return;
//             };
//             const transaction = await writeContract.stake(selectedIndexes, amountsPerBox, {
//                 value: splitAmount
//             });
//             console.log('write response', transaction)

//             setAmountBoxes(prev =>
//                 prev.map((val, idx) =>
//                     selectedIndexes.includes(idx)
//                         ? val + Number(amount)
//                         : val
//                 )
//             );
//             setSelectedIndexes([])
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setIsDepositing(false)
//         }
//     }

//     // useEffect(() => {
//     //     const users = Array.from({ length: 25 }, () => Math.floor(Math.random() * 500));
//     //     const amounts = Array.from({ length: 25 }, () =>
//     //         (Math.random() * 9000 + 100).toFixed(2)
//     //     );
//     //     setUsers(users)
//     //     setAmounts(amounts)
//     // }, [])

//     useEffect(() => {
//         getRoundDetails()
//         getCurrentTimestamp()
//         getEndTimestamp()
//         getGameStatus()
//         getCurrentRound()
//     }, [])

//     useEffect(() => {
//         console.log("Updated amountBoxes", amountBoxes)
//     }, [amountBoxes])

//     useEffect(() => {
//         setTotalAmount(selectedIndexes.length * Number(amount))
//     }, [amount, selectedIndexes])

//     // remaining time
//     useEffect(() => {
//         if (!endTimestamp) return;
//         const now = Math.floor(Date.now() / 1000);
//         const remain = endTimestamp - now;

//         if (remain > 0) {
//             setIsEnded(false);
//             setTimer(remain);
//         } else {
//             setIsEnded(true);
//             setTimer(0);
//         }
//     }, [endTimestamp]);

//     useEffect(() => {
//         if (timer > 0) {
//             const int = setInterval(() => setTimer(t => t - 1), 1000);
//             return () => clearInterval(int);
//         }

//         // when timer hits zero and no winner yet
//         if (timer === 0 && winningIndex === null) {
//             const random = Math.floor(Math.random() * 25);
//             setWinningIndex(random);
//             setIsEnded(true);

//             // reveal winner glow after fade animation
//             setTimeout(() => setShowWinner(true), 3000);

//             // reset everything after 8s
//             setTimeout(() => {
//                 setWinningIndex(null);
//                 setShowWinner(false);
//                 setIsEnded(false);
//                 setSelectedIndexes([]);
//                 setAmountBoxes(Array.from({ length: 25 }).map(() => 0));
//                 setTimer(30);
//                 setEndTimestamp(Math.floor(Date.now() / 1000) + 30);
//             }, 8000);
//         }
//     }, [timer]);

//     return (
//         <section className="mt-18 xl:mt-20 xl:h-[calc(100vh-122px)] overflow-hidden">
//             <div className="flex flex-wrap md:flex-nowrap h-full">
//                 <div className="w-full md:h-[calc(100vh-122px)] overflow-y-auto scrollbar-hide pb-6 md:pb-0">
//                     <GridLayout
//                         selectedIndexes={selectedIndexes}
//                         setSelectedIndexes={setSelectedIndexes}
//                         toggleSelected={toggleSelected}
//                         amountBoxes={amountBoxes}
//                         isEnded={isEnded}
//                         showWinner={showWinner}
//                         winningIndex={winningIndex}
//                         users={users}
//                         amounts={amounts}
//                         currentRound={currentRound}
//                     />
//                 </div>
//                 <div className="sidebar w-full md:w-fit md:min-w-xs lg:min-w-md border-l border-primary bg-grey-100 md:h-[calc(100vh-116px)] xl:h-[calc(100vh-122px)] overflow-y-auto pb-4 md:pb-10">
//                     <Tabs defaultValue="mine" className="w-full gap-0">
//                         <TabsList className="border-[1.25px] rounded-[12px] p-1 border-black-25 bg-primary-15 mx-auto  mt-6 md:mt-10 ">
//                             <TabsTrigger value="mine">Mine</TabsTrigger>
//                             <TabsTrigger value="last-round">Last Round</TabsTrigger>
//                         </TabsList>
//                         <TabsContent value="mine" className="h-full relative">
//                             <MineTab
//                                 amount={amount}
//                                 setAmount={setAmount}
//                                 handleDeposit={handleDeposit}
//                                 timer={timer}
//                                 selectedIndexes={selectedIndexes}
//                                 isDepositing={isDepositing}
//                             />
//                         </TabsContent>
//                         <TabsContent value="last-round">
//                             <Winners />
//                         </TabsContent>
//                     </Tabs>
//                 </div>
//             </div>
//         </section>
//     )
// }