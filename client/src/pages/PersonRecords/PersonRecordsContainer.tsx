import {IPersonRecordsContainerProps, PersonRecordType} from "../../shared/types/PersonsRecords.ts";
import {FC} from "react";
import PersonRecordsElement from "./PersonRecordsElement.tsx";
import {DetailsContainer} from "../../shared/styles/styles.ts";

const PersonRecordsContainer: FC<IPersonRecordsContainerProps> = ({data}) => {

    return (
        <DetailsContainer>
            {
                data.map((item: PersonRecordType) => {
                    return (
                        <PersonRecordsElement
                            data={item}
                            key={item.id_person_condition}
                        />
                    )
                })
            }
        </DetailsContainer>
    )
}

export default PersonRecordsContainer