import { View } from 'react-native'

interface IProps {
  height?: number
}

export default function Gap({ height = 10 }: IProps) {
  return <View style={{ height }} />
}
