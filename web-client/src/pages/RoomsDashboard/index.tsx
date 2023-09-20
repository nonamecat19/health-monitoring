import {FC, Suspense, useState} from 'react'
import {Sidebar, CurrentDate} from "./styles.ts"
import {Calendar} from "antd"
import type { Dayjs } from 'dayjs'
import type { CalendarMode } from 'antd/es/calendar/generateCalendar'
import 'dayjs/locale/uk.js'
import {BetweenItems} from "../../shared/styles/styles.ts"
import ErrorBoundary from "../../shared/components/ErrorBoundary.tsx"
import Data from "./Data.tsx"

const RoomsDashboard: FC = () => {
    const onPanelChange = (_: Dayjs, mode: CalendarMode) => {
        setIsMonthSelected(mode === 'month')
    }

    const curDate = new Date()

    const defaultDate = [
        curDate.getDate(),
        curDate.getMonth() + 1,
        curDate.getFullYear()
    ].map(el => el.toString())

    const [date, setDate] = useState<string[]>(defaultDate)
    const [isMonthSelected, setIsMonthSelected] = useState<boolean>(true)

    const onSelect = (value: Dayjs) => {
        if (isMonthSelected) {
            setDate(value.format('DD-MM-YYYY').split('-'))
            setPickedDate(value.format('DD-MM-YYYY'))
        } else {
            setPickedDate(value.format('MM-YYYY'))
        }
    }

    const [pickedDate, setPickedDate] = useState<string>('')

    return (

        <BetweenItems>
            <ErrorBoundary fallback={<>Error</>}>
                <Suspense fallback={<>Loading</>}>
                    <Data
                        day={date[0]}
                        month={date[1]}
                        year={date[2]}
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
            </Sidebar>

        </BetweenItems>


    )
}

export default RoomsDashboard