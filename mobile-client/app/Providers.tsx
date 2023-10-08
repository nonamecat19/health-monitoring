import {EvaIconsPack} from "@ui-kitten/eva-icons";
import {ReactNode} from "react";
import * as eva from '@eva-design/eva';
import {QueryClient, QueryClientProvider} from "react-query";
import { IconRegistry } from "@ui-kitten/components/ui/icon/iconRegistry.component";
import { ApplicationProvider } from "@ui-kitten/components/theme/application/applicationProvider.component";

const client = new QueryClient({

})

interface IProps {
  children: ReactNode
}

export default function Providers({children}: IProps) {
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.light}>
        <QueryClientProvider client={client}>
          {children}
        </QueryClientProvider>
      </ApplicationProvider>
    </>
  )
}