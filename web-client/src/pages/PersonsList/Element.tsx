import {FC} from "react";
import {IPersonsElementProps} from "../../shared/types/Persons.ts";
import styled from "styled-components";
import {COLORS, PATH} from "../../shared/constants";
import {RoleIcon} from "./RoleIcon.tsx";
import {BetweenItems, Block} from "../../shared/styles";
import {DivElement} from "./styles.ts";
import {useNavigate} from "react-router-dom";
import {Button, Popover} from "antd";

export const Element: FC<IPersonsElementProps> = ({data}) => {
  const {personId, name, role, studyGroup, surname, patronymic} = data
  const navigate = useNavigate()
  const toRecordsHandler = (): void => {
    navigate(`/${PATH.ADMIN}/${PATH.PERSONS}/${PATH.RECORDS}/${personId}`)
  }

  const toDashboardHandler = (): void => {
    navigate(`/${PATH.ADMIN}/${PATH.PERSONS}/${PATH.DASHBOARD}/${personId}`)
  }

  const content = (
    <>
      <Button onClick={toRecordsHandler}>Перейти до записів</Button>
      <Button onClick={toDashboardHandler}>Перейти до статистики</Button>
    </>
  );

  return (
    <Popover content={content}>
      <DivElement>
        <BetweenItems>
          <DataBlock>
            <Block>{surname} {name} {patronymic}</Block>
            <Block>{studyGroup}</Block>
          </DataBlock>

          <RoleIcon
            role={role}
            size={60}
            color={COLORS.darkAccent}
          />

        </BetweenItems>
      </DivElement>
    </Popover>

  )
}

export const DataBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 170px;
    font-weight: bold;
    color: ${COLORS.darkAccent};
`
