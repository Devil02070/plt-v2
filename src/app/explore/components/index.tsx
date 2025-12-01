import BuyBackTable from "./BuyBackTable";
import MiningTable from "./MiningTable";
import PowerhouseTable from "./PowerhouseTable";
import ExploreStats from "./Stats";

export default function Body() {
    return (
        // <section className="mx-auto max-w-7xl py-8 md:py-10 px-4 md:px-6">
        <section className="pt-26 md:pt-28 2xl:pt-35 pb-19 px-4 overflow-y-auto scrollbar-hide max-w-7xl mx-auto">
            <ExploreStats />
            <MiningTable />
            <PowerhouseTable />
            <BuyBackTable />
        </section>
    )
}