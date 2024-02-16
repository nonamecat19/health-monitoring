import {FC, useState} from "react"
import {Button, Checkbox, Drawer} from "antd"
import styled from "styled-components";
import {SIZES} from "../../shared/constants";
import {IRoomsRecordsFilter} from "../../shared/types/RoomRecords.ts";
import {IoSettingsOutline} from "react-icons/io5";

export const Filters: FC<IRoomsRecordsFilter> = ({onlyCritical, setOnlyCritical}) => {
  const [open, setOpen] = useState(false)

  const showDrawer = (): void => {
    setOpen(true)
  }

  const onClose = (): void => {
    setOpen(false)
  }

  const onChangeCritical = (): void => {
    setOnlyCritical(!onlyCritical)
  }

  return (
    <DrawerContainer>
      <MyButton type="default" onClick={showDrawer}>
        <IoSettingsOutline size={35}/>
        <div>Фільтри</div>
      </MyButton>

      <Drawer
        title="Фільтри"
        width={300}
        onClose={onClose}
        open={open}
      >
        <Checkbox checked={onlyCritical} onChange={onChangeCritical}>
          Тільки критичні
        </Checkbox>
      </Drawer>
    </DrawerContainer>
  )
}

const DrawerContainer = styled.div`
    position: relative;
`

const MyButton = styled(Button)`
    position: absolute;
    right: 0;
    top: 10px;
    z-index: 10;
    height: 50px;
    padding: 5px;
    font-size: 1.5rem;
    display: flex;
    gap: ${SIZES.xs};
`
