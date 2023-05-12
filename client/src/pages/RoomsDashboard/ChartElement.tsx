import {FC, useState} from "react"
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import COLORS from "../../shared/constants/Colors.ts"
import {ChartTitle, ChartWrapper} from "./styles.ts"
import {IChartProps} from "../../shared/types/RoomDashboard.ts";

const ChartElement: FC<IChartProps> = ({data, title}) => {

    const [fullscreen, setFullscreen] = useState(false);
    const chartHandler = (): void => {

        setFullscreen(!fullscreen)
    }


    return (
        <ChartWrapper
            onClick={chartHandler}
            fullscreen={fullscreen}
        >

            <ChartTitle>{title}</ChartTitle>
            <ResponsiveContainer
                width={fullscreen ? '100%' : 350}
                height={fullscreen ? '90%' : 200}
            >
                <LineChart width={350} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
                    <YAxis/>
                    <Tooltip/>
                    <Line dataKey="min" dot={false} stroke={COLORS.red} activeDot={{r: 0}}/>
                    <Line dataKey="value" type="monotone" stroke={COLORS.green2} activeDot={{r: 8}}/>
                    <Line dataKey="max" dot={false} stroke={COLORS.red} activeDot={{r: 0}}/>
                </LineChart>
            </ResponsiveContainer>

        </ChartWrapper>
    )
}

export default ChartElement

