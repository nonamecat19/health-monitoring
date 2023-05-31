import {FC} from "react"
import styled from "styled-components"
import {DivElement} from "./styles"
import {IRoomsElementProps} from "../../shared/types/Rooms"
import PATH from "../../shared/constants/Path"
import {Button, Popover} from "antd"
import {useNavigate} from "react-router-dom"

const Element: FC<IRoomsElementProps> = ({data}) => {
    const {room_number, room_type} = data

    const navigate = useNavigate()

    const toRecordsHandler = () => {
        navigate(`/${PATH.ROOMS}/${PATH.RECORDS}/${room_number}`)
    }
    const toDashboardHandler = () => {
        navigate(`/${PATH.ROOMS}/${PATH.DASHBOARD}/${room_number}`)
    }

    const content = (
        <>
            <Button onClick={toRecordsHandler}>Перейти до записів</Button>
            <Button onClick={toDashboardHandler}>Перейти до статистики</Button>
        </>
    )

    return (
        <Popover content={content}>
            <DivElement>
                <Data>
                    {room_number} {room_type}
                </Data>
            </DivElement>
        </Popover>
    )
}



const Data = styled.div`
  font-size: 1.1rem;
`

export default Element