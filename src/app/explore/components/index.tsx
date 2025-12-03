'use client'
import { MiningData } from "@/utils/types";
import BuyBackTable from "./BuyBackTable";
import MiningTable from "./MiningTable";
import PowerhouseTable from "./PowerhouseTable";
import ExploreStats from "./Stats";
import { useEffect, useState } from "react";
import backendApi from "@/utils/backendApi";

export default function Body() {
    const [mining, setMining] = useState<MiningData[]>([])
    const [powerhouse, setPowerhouse] = useState<MiningData[]>([])
    const getMinningData = async () => {
        try {
            const res = await backendApi.getExploreMining();
            setMining(res.data.data)
            console.log('mining', res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const getPowerhouseData = async () => {
        try {
            const res = await backendApi.getExplorePowerhouse();
            setPowerhouse(res.data.data)
            console.log('powerhouse', res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getMinningData()
        getPowerhouseData()
    }, [])
    return (
        <section className="pt-26 md:pt-28 2xl:pt-35 pb-19 px-4 overflow-y-auto scrollbar-hide max-w-7xl mx-auto">
            <ExploreStats />
            <MiningTable mining={mining} />
            <PowerhouseTable powerhouse={powerhouse} />
            <BuyBackTable />
        </section>
    )
}