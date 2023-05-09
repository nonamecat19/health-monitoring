import {FC, useState} from 'react'
import ChartElement from "./ChartElement.tsx"
import {Sidebar, Container, StatsTitle, Button, CurrentDate} from "./styles.ts"
import {Calendar} from "antd"
import type { Dayjs } from 'dayjs'
import type { CalendarMode } from 'antd/es/calendar/generateCalendar'
import 'dayjs/locale/uk.js'
import {BetweenItems, MyLink} from "../../shared/styles/styles.ts";

const data = [
    {
        name: 'Page A',
        value: 4000,
        min: 2000,
        max: 4500
    },
    {
        name: 'Page B',
        value: 3000,
        min: 2000,
        max: 4500
    },
    {
        name: 'Page C',
        value: 2000,
        min: 2000,
        max: 4500
    },
    {
        name: 'Page D',
        value: 2780,
        min: 2000,
        max: 4500
    },
    {
        name: 'Page E',
        value: 1890,
        min: 2000,
        max: 4500
    },
    {
        name: 'Page F',
        value: 2390,
        min: 2000,
        max: 4500
    },
    {
        name: 'Page G',
        value: 3490,
        min: 2000,
        max: 4500
    },
]


const RoomsDashboard: FC = () => {
    const onPanelChange = (_: Dayjs, mode: CalendarMode) => {
        setIsMonthSelected(mode === 'month')
    }

    const onSelect = (value: Dayjs) => {
        if (isMonthSelected) {
            setPickedDate(value.format('DD-MM-YYYY'))
        } else {
            setPickedDate(value.format('MM-YYYY'))
        }
    }

    const [pickedDate, setPickedDate] = useState<string>('');
    const [isMonthSelected, setIsMonthSelected] = useState<boolean>(true);

    return (
        <BetweenItems>
            <Container>
                <StatsTitle>
                    Статистика за 4/9/2023
                </StatsTitle>
                <ChartElement data={data} title={'Температура'}/>
                <ChartElement data={data} title={'Вологість повітря'}/>
                <ChartElement data={data} title={'Озон'}/>
                <ChartElement data={data} title={'Тиск'}/>
                <ChartElement data={data} title={'Тиск'}/>
                <ChartElement data={data} title={'Тиск'}/>
            </Container>
            <Sidebar>
                <Calendar
                    fullscreen={false}
                    onPanelChange={onPanelChange}
                    onSelect={onSelect}
                />
                <CurrentDate>
                    {pickedDate ? 'Обрана дата: ' : ' '}
                    {pickedDate}
                </CurrentDate>
                <MyLink to={'./'}>
                    <Button>
                        Перейти до поточної дати
                    </Button>
                </MyLink>
            </Sidebar>

        </BetweenItems>

    )
}



export default RoomsDashboard