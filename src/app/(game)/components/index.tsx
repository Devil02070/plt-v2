import GridLayout from "./GridLayout";

export default function Body() {
    return (
        <section className="h-[calc(100vh-125px)]">
            <div className="flex h-full">
                <div className="w-full">
                    <GridLayout />
                </div>
                <div className="sidebar min-w-md border-l border-primary bg-grey-100 p-8"></div>
            </div>
        </section>
    )
}