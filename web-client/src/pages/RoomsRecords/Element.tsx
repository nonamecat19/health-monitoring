import { FC } from 'react'
import { RoomRecordsElementProps } from '../../shared/types/RoomRecords.ts'
import CriticalIcon from '../../shared/ui/CriticalIcon.tsx'
import ParamElement from '../../shared/ui/ParamElement.tsx'
import moment from 'moment'
import COLORS from '../../shared/constants/Colors.ts'
import { Title, DivElement } from './styles.ts'
import styled from 'styled-components'
import SIZES from '../../shared/constants/Sizes.ts'

const Element: FC<RoomRecordsElementProps> = ({ data }) => {

  let {
    roomRecordId,
    humidity,
    temperature,
    pressure,
    room,
    ozone,
    recordedDate,
    airIons,
    isCriticalResults,
    carbonDioxide,
  } = data


  const clickHandler = (): void => {
    console.log(roomRecordId)
  }

  return (
    <DivElement
      onClick={clickHandler}
      color={isCriticalResults ? COLORS.red : COLORS.green2}
    >

      <CriticalIcon critical={isCriticalResults} />

      <Title>
        Кімната {room.roomNumber}
      </Title>

      <ParamElement label={'Температура повітря'} value={temperature} units={'°С'} />
      <ParamElement label={'Вологість повітря'} value={humidity} units={'%'} />
      <ParamElement label={'Тиск повітря'} value={pressure} units={'мм рт. ст.'} />
      <ParamElement label={'Вуглекислий газ'} value={carbonDioxide} units={'ррm'} />
      <ParamElement label={'Аероіони'} value={airIons} units={'іон/см³'} />
      <ParamElement label={'Озон'} value={ozone} units={'мг/м³'} />
      <Date>
        {moment(recordedDate).format('HH:MM')}
        {' '}
        {moment(recordedDate).format('DD/MM/YYYY')}
      </Date>
    </DivElement>
  )
}

const Date = styled.div`
    position: absolute;
    bottom: ${SIZES.sm};
    right: ${SIZES.md};
    font-size: 1.3rem;
    font-weight: bold;
`

export default Element
