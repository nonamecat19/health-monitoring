import {FC, Suspense, useState} from 'react'
import ChartElement from "./ChartElement.tsx"
import {Sidebar, Container, StatsTitle, Button, CurrentDate} from "./styles.ts"
import {Calendar} from "antd"
import type { Dayjs } from 'dayjs'
import type { CalendarMode } from 'antd/es/calendar/generateCalendar'
import 'dayjs/locale/uk.js'
import {BetweenItems, MyLink} from "../../shared/styles/styles.ts";
import ErrorBoundary from "../../shared/components/ErrorBoundary.tsx";
import Data from "./Data.tsx";




const RoomsDashboard: FC = () => {


    const onPanelChange = (_: Dayjs, mode: CalendarMode) => {
        setIsMonthSelected(mode === 'month')
    }
    const [isMonthSelected, setIsMonthSelected] = useState<boolean>(true);

    const onSelect = (value: Dayjs) => {
        if (isMonthSelected) {
            setPickedDate(value.format('DD-MM-YYYY'))
        } else {
            setPickedDate(value.format('MM-YYYY'))
        }
    }

    const [pickedDate, setPickedDate] = useState<string>('');

    return (

        <BetweenItems>
            <ErrorBoundary fallback={<>Error</>}>
                <Suspense fallback={<>Loading</>}>
                    <Data
                        day={12}
                        month={3}
                        year={2023}
                    />
                </Suspense>
            </ErrorBoundary>
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