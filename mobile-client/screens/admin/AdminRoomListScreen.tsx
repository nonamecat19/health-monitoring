import { Input, Layout, Text } from '@ui-kitten/components'
import { Fragment, useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { useQuery } from 'react-query'

import { getRoomList } from '../../api/query/getRoomList'
import BaseCard from '../../components/BaseCard'
import Gap from '../../components/Gap'
import SearchNotFound from '../../components/SearchNotFound'
import AdminLayout from '../../layouts/adminLayout'

export default function AdminRoomListScreen({ navigation }) {
  const { isLoading, error, data } = useQuery('admin_room_list', getRoomList)
  const [search, setSearch] = useState<string>('')

  const iconTypes = {
    lecture: 'people',
    cabinet: 'mortar-board',
  }

  if (isLoading) {
    return <Text>Loading</Text>
  }

  if (error) {
    return <Text>Error: {JSON.stringify(error)}</Text>
  }

  const filteredData = data.filter((el) => el.room_number.includes(search))

  return (
    <AdminLayout navigation={navigation}>
      <Input
        value={search}
        placeholder="Пошук"
        onChangeText={(nextValue) => setSearch(nextValue)}
      />
      <Layout level="1" style={style.container}>
        <ScrollView style={style.roomContainer}>
          {filteredData.length ? null : <SearchNotFound />}
          {filteredData.map(({ room_number, room_type }) => (
            <Fragment key={room_number}>
              <BaseCard
                icon={iconTypes[room_type]}
                title={'Кімната ' + room_number}
                firstButtonName="Записи"
                firstButtonHandler={() => {}}
                secondButtonName="Статистика"
                secondButtonHandler={() => {}}
              />
              <Gap />
            </Fragment>
          ))}
        </ScrollView>
      </Layout>
    </AdminLayout>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  roomContainer: {
    rowGap: 40,
  },
})
