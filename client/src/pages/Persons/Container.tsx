import {IPersonsElement, IPersonsListProps} from "../../shared/types/Persons.ts";
import {FC} from "react";
import styled from "styled-components";
import Element from "./Element.tsx";
import SIZES from "../../shared/constants/Sizes.ts";


const Container: FC<IPersonsListProps> = ({data}) => {

    return (
        <DivContainer>
            {
                data.map((item: IPersonsElement) => {
                    return <Element data={item} key={item.id_person}/>
                })
            }
        </DivContainer>
    )

}

const DivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${SIZES.sm};
  gap: 20px
`
export default Container