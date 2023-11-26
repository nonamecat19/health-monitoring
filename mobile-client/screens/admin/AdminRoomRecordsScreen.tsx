import { Text } from 'react-native'

import { useGetRoomRecords } from '../../api/query/getRoomRecords'

export default function AdminRoomRecordsScreen() {
  const { isLoading, error, data } = useGetRoomRecords()

  return (
    <>
      <Text>{JSON.stringify(data)}</Text>
    </>
  )
}
