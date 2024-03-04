import {FC} from "react"
import styled from "styled-components"
import {DivElement} from "./styles"
import {IRoomsElementProps} from "../../shared/types/Rooms"
import {PATH} from "../../shared/constants"
import {Button, Popover} from "antd"
import {useNavigate} from "react-router-dom"

export const Element: FC<IRoomsElementProps> = ({data}) => {
  const {roomNumber, roomType, roomId} = data

  const navigate = useNavigate()

  const toRecordsHandler = () => {
    navigate(`/${PATH.ADMIN}/${PATH.ROOMS}/${PATH.RECORDS}/${roomId}`)
  }

  const toDashboardHandler = () => {
    navigate(`/${PATH.ADMIN}/${PATH.ROOMS}/${PATH.DASHBOARD}/${roomId}`)
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
          {roomNumber} {roomType}
        </Data>
      </DivElement>
    </Popover>
  )
}


const Data = styled.div`
    font-size: 1.1rem;
`
