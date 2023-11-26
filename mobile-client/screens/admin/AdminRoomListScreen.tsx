import { Input, Layout } from '@ui-kitten/components'
import { Fragment, useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import { useGetRoomList } from '../../api/query/getRoomList'
import BaseCard from '../../components/BaseCard'
import Gap from '../../components/Gap'
import Loading from '../../components/Loading'
import SearchNotFound from '../../components/SearchNotFound'
import { roomIcons } from '../../config/icons'
import { ScreenProps } from '../../shared/types/navigation'

export default function AdminRoomListScreen({ navigation }: ScreenProps) {
  const { isLoading, error, data } = useGetRoomList()
  const [search, setSearch] = useState<string>('')

  function Content() {
    if (isLoading) {
      return <Loading />
    }

    if (error || !data) {
      return null
    }

    const filteredData = data.filter((el) => el.room_number.includes(search))

    return (
      <>
        {filteredData.length ? null : <SearchNotFound />}
        {filteredData.map(({ room_number, room_type }) => (
          <Fragment key={room_number}>
            <BaseCard
              icon={roomIcons[room_type]}
              title={'Кімната ' + room_number}
              firstButtonName="Записи"
              firstButtonHandler={() => {}}
              secondButtonName="Статистика"
              secondButtonHandler={() => {}}
            />
            <Gap />
          </Fragment>
        ))}
      </>
    )
  }

  return (
    <>
      <Input value={search} placeholder="Пошук" onChangeText={(value) => setSearch(value)} />
      <Layout level="1" style={style.container}>
        <ScrollView>
          <Content />
        </ScrollView>
      </Layout>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
})
