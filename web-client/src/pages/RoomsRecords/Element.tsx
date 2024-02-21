import {FC} from 'react'
import {RoomRecordsElementProps} from '../../shared/types/RoomRecords.ts'
import {CriticalIcon, ParamElement} from '../../shared/ui'
import moment from 'moment'
import {COLORS, SIZES} from '../../shared/constants'
import {DivElement, Title} from './styles.ts'
import styled from 'styled-components'

export const Element: FC<RoomRecordsElementProps> = ({data}) => {
  const {
    id,
    humidity,
    temperature,
    pressure,
    room,
    ozone,
    recordedDate,
    airIons,
    isCriticalResult,
    carbonDioxide,
  } = data


  const clickHandler = (): void => {
    console.log(id)
  }

  return (
    <DivElement
      onClick={clickHandler}
      color={isCriticalResult ? COLORS.red : COLORS.green2}
    >

      <CriticalIcon critical={isCriticalResult}/>

      <Title>
        Кімната {room.roomNumber}
      </Title>

      <ParamElement label={'Температура повітря'} value={temperature} units={'°С'}/>
      <ParamElement label={'Вологість повітря'} value={humidity} units={'%'}/>
      <ParamElement label={'Тиск повітря'} value={pressure} units={'мм рт. ст.'}/>
      <ParamElement label={'Вуглекислий газ'} value={carbonDioxide} units={'ррm'}/>
      <ParamElement label={'Аероіони'} value={airIons} units={'іон/см³'}/>
      <ParamElement label={'Озон'} value={ozone} units={'мг/м³'}/>
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
