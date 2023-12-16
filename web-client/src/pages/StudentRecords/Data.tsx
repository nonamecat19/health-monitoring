import {FC} from "react"
// @ts-ignore
import useSWR from "swr";
// @ts-ignore
import REQUESTS from "../../shared/constants/Requests.ts";
import {DetailsContainer} from "../../shared/styles/styles.ts";
import styled from "styled-components";
import ParamElement from "../../shared/ui/ParamElement.tsx";
import moment from "moment/moment";
import COLORS from "../../shared/constants/Colors.ts";
import SIZES from "../../shared/constants/Sizes.ts";
import personRecords from '../../mock/personRecords.ts'
type Props = {
 
}
const Data: FC<Props> = ({}) => {
    // const {data} = useSWR(REQUESTS.STUDENT_RECORDS)
    const data = personRecords
    if (!data) return null

    return (
        <DetailsContainer>
            {data.data.map((element: any) => <Element data={element}/>)}
        </DetailsContainer>
    )
}


type ElementProps = {
    data: any
}
const Element: FC<ElementProps> = ({data}) => {
    return (
        <ElementBlock danger={data.is_critical_results}>
            <ParamElement label={'Кімната'} value={data.room_number}/>
            <ParamElement label={'Частота серцебиття'} value={data.heart_rate} units={'уд./хв.'}/>
            <ParamElement label={'Кисень'} value={data.oxygen} units={''}/>
            <ParamElement label={'Температура тіла'} value={data.temperature} units={'°С'}/>
            <Date>{moment(data.recorded_date).format('D/M/YYYY')}</Date>
        </ElementBlock>
    )
}

const Date = styled.div`
  position: absolute;
  right: ${SIZES.md}
`

const ElementBlock = styled.div<{danger: boolean}>`
  position: relative;
  padding: ${SIZES.md};
  padding-bottom: ${SIZES.lg};
  border-radius: ${SIZES.md};
  background: ${props => props.danger ? COLORS.green2 : COLORS.red};
`
export default Data