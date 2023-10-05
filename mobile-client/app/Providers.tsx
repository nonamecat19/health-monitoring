import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import {ReactNode} from "react";
import * as eva from '@eva-design/eva';

interface IProps {
  children: ReactNode
}

export default function Providers({children}: IProps) {
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.light}>
        {children}
      </ApplicationProvider>
    </>
  )
}