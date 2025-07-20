import { Card } from "~/components/ui/atoms/card"

export const TableLoader = () => {
    return (
        <Card className="min-h-10/12 animate-pulse bg-accent/20 text-center flex items-center justify-center"><span>
    Loading...</span></Card>
    )
}