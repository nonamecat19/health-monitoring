import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components/theme/application/applicationProvider.component'
import { IconRegistry } from '@ui-kitten/components/ui/icon/iconRegistry.component'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import { store } from '../store/store'

const client = new QueryClient({})

interface IProps {
  children: ReactNode
}

export default function Providers({ children }: IProps) {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </ApplicationProvider>
    </Provider>
  )
}
