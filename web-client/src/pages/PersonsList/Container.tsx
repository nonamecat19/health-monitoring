import {IPersonsContainerProps, IPersonsElement} from "../../shared/types/Persons.ts"
import {FC} from "react"
import {Element} from "./Element.tsx"
import {DivContainer} from "./styles.ts"

export const Container: FC<IPersonsContainerProps> = ({data}) => {
  return (
    <DivContainer>
      {data.map((item: IPersonsElement) => <Element data={item} key={item.personId}/>)}
    </DivContainer>
  )
}
