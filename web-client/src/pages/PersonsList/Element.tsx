import {FC} from "react";
import {IPersonsElementProps} from "../../shared/types/Persons.ts";
import styled from "styled-components";
import COLORS from "../../shared/constants/Colors.ts";
import RoleIcon from "./RoleIcon.tsx";
import {BetweenItems, Block} from "../../shared/styles/styles.ts";
import {DivElement} from "./styles.ts";
import {useNavigate} from "react-router-dom";
import PATH from "../../shared/constants/Path.ts";
import {Button, Popover} from "antd";

const Element: FC<IPersonsElementProps> = ({data}) => {
    const {personId, name, role, studyGroup} = data
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
                        <Block>{name}</Block>
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

export default Element