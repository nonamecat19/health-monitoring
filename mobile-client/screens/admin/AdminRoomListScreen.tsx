import {Text, StyleSheet, View, ScrollView} from "react-native";
import {useQuery} from "react-query";
import {getRoomList} from "../../api/query/getRoomList";
import {Input, Layout} from "@ui-kitten/components";
import Room from "../../components/Room";
import {Fragment, useState} from "react";
import Gap from "../../components/Gap";
import AdminLayout from "../../layouts/adminLayout";

export default function AdminRoomListScreen({navigation}) {
  const {isLoading, error, data} = useQuery('admin_room_list', getRoomList)
  const [search, setSearch] = useState<string>("")

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
            new Array(20)
            .fill(null)
            .map((_, index) => <Fragment key={index}>
              <Room/>
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