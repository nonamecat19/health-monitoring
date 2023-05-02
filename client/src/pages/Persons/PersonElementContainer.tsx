import {IPersonsElement, IPersonsListProps} from "../../shared/types/Persons.ts";
import {FC} from "react";
import styled from "styled-components";
import PersonElement from "./PersonElement.tsx";
import SIZES from "../../shared/constants/Sizes.ts";


const PersonElementContainer: FC<IPersonsListProps> = ({data}) => {

    return (
        <Container>
            {
                data.map((item: IPersonsElement) => {
                    return <PersonElement data={item} key={item.id_person}/>
                })
            }
        </Container>
    )

}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${SIZES.sm};
  gap: 20px
`
export default PersonElementContainer