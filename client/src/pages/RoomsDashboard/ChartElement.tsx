import {FC} from "react"
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import COLORS from "../../shared/constants/Colors.ts"
import {ChartElementProps} from "../../shared/types/Charts.ts"
import {ChartTitle, ChartWrapper} from "./styles.ts"

const ChartElement: FC<ChartElementProps> = ({data, title}) => {

    return (
        <ChartWrapper>

            <ChartTitle>{title}</ChartTitle>
            <ResponsiveContainer width={350} height={200}>
                <LineChart width={350} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
                    <YAxis/>
                    <Tooltip/>
                    <Line dataKey="min" dot={false} stroke={COLORS.red} activeDot={{r: 0}}/>
                    <Line type="monotone" dataKey="value" stroke={COLORS.green2} activeDot={{r: 8}}/>
                    <Line dataKey="max" dot={false} stroke={COLORS.red} activeDot={{r: 0}}/>
                </LineChart>
            </ResponsiveContainer>

        </ChartWrapper>
    )
}

export default ChartElement

