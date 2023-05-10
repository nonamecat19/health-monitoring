import {IPersonRecordsContainerProps, PersonRecordType} from "../../shared/types/PersonsRecords.ts";
import {FC} from "react";
import Element from "./Element.tsx";
import {DetailsContainer} from "../../shared/styles/styles.ts";

const Container: FC<IPersonRecordsContainerProps> = ({data}) => {

    return (
        <>
            <DetailsContainer>
                {
                    data.map((item: PersonRecordType) => {
                        return (
                            <Element
                                data={item}
                                key={item.id_person_records}
                            />
                        )
                    })
                }
            </DetailsContainer>
        </>
    )
}

export default Container