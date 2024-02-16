export interface ChartElementProps {
    data: ChartElementData[]
    title: string
}

export type ChartElementData = {
    name: string
    min?: number
    value: number
    max?: number
}
