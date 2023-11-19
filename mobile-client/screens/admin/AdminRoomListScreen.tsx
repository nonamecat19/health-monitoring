import {StyleSheet, ScrollView} from "react-native";
import {useQuery} from "react-query";
import {getRoomList} from "../../api/query/getRoomList";
import {Input, Layout} from "@ui-kitten/components";
import {Fragment, useState} from "react";
import Gap from "../../components/Gap";
import AdminLayout from "../../layouts/adminLayout";
import BaseCard from "../../components/BaseCard";

export default function AdminRoomListScreen({navigation}) {

  const {isLoading, error, data} = useQuery('admin_room_list', getRoomList)
  const [search, setSearch] = useState<string>("")

  const type = 'lecture'
  const iconTypes = {
    'lecture': 'people',
    'cabinet': 'mortar-board'
  }
  const icon: any = iconTypes[type] ?? ''


  return (
    <AdminLayout navigation={navigation}>
      <Input
        value={search}
        placeholder='Пошук'
        onChangeText={nextValue => setSearch(nextValue)}
      />
      <Layout level="1" style={style.container}>
        <ScrollView style={style.roomContainer}>
          {
            data
            .map(({room_number, room_type}, index) => <Fragment key={index}>
              <BaseCard
                icon={iconTypes[room_type]}
                title={room_number}
                firstButtonName={'Записи'}
                firstButtonHandler={() => {}}
                secondButtonName={'Статистика'}
                secondButtonHandler={() => {}}
              />
              {index < 19 ? <Gap/> : null}
            </Fragment>)
          }
        </ScrollView>
      </Layout>
    </AdminLayout>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    height: "100%"
  },
  roomContainer: {
    rowGap: 40
  }
})