import {FC} from "react";
import {IPersonsElementProps} from "../../shared/types/Persons.ts";
import styled from "styled-components";
import COLORS from "../../shared/constants/Colors.ts";
import RoleIcon from "./RoleIcon.tsx";
import SIZES from "../../shared/constants/Sizes.ts";
import {BetweenItems, Block} from "../../shared/styles/styles.ts";

const PersonElement: FC<IPersonsElementProps> = ({data}) => {
    const {name_person, study_group, role, id_person} = data
    const clickHandler = (): void => {
        console.log(id_person)
    }



    return (
        <Element onClick={clickHandler}>
            <BetweenItems>
                <DataBlock>
                    <Block>{name_person}</Block>
                    <Block>{study_group}</Block>
                </DataBlock>

                <RoleIcon
                    role={role}
                    size={80}
                    color={COLORS.darkAccent}
                />

            </BetweenItems>

        </Element>
    )
}

const Element = styled.div`
  background: ${COLORS.green2};
  width: 300px;
  padding: ${SIZES.sm};
  border-radius: ${SIZES.sm};
`

export const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 170px;
  font-weight: bold;
  color: ${COLORS.darkAccent};
`

export default PersonElement