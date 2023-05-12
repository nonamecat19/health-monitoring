import {FC} from "react";
import {IPersonsElementProps} from "../../shared/types/Persons.ts";
import styled from "styled-components";
import COLORS from "../../shared/constants/Colors.ts";
import RoleIcon from "./RoleIcon.tsx";
import {BetweenItems, Block} from "../../shared/styles/styles.ts";
import {DivElement} from "./styles.ts";
import {useNavigate} from "react-router-dom";
import PATH from "../../shared/constants/Path.ts";

const Element: FC<IPersonsElementProps> = ({data}) => {
    const {name_person, study_group, role_person, id_person} = data
    const navigate = useNavigate()
    const clickHandler = (): void => {
        navigate(`/${PATH.PERSONS}/${PATH.RECORDS}/${id_person}`)
    }

    return (
        <DivElement onClick={clickHandler}>
            <BetweenItems>
                <DataBlock>
                    <Block>{name_person}</Block>
                    <Block>{study_group}</Block>
                </DataBlock>

                <RoleIcon
                    role={role_person}
                    size={60}
                    color={COLORS.darkAccent}
                />

            </BetweenItems>
        </DivElement>
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