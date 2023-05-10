import {IPersonsElement, IPersonsListProps} from "../../shared/types/Persons.ts"
import {ChangeEvent, FC, useState} from "react"
import Element from "./Element.tsx"
import {DivContainer, FiltersSpace, NameFilter} from "./styles.ts"
import {UserOutlined} from '@ant-design/icons'
import {isSimilar} from "../../shared/utils/CompareStrings.ts"
import {ToCenter} from "../../shared/styles/styles.ts"

const Container: FC<IPersonsListProps> = ({data}) => {

    const [search, setSearch] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.currentTarget.value)
    }

    return (
        <>
            <FiltersSpace>
                <ToCenter>
                    <NameFilter
                        size="large"
                        value={search}
                        placeholder="Пошук"
                        prefix={<UserOutlined/>}
                        onChange={onChangeHandler}
                    />
                </ToCenter>
            </FiltersSpace>
            <DivContainer>
                {
                    data.map((item: IPersonsElement) => {
                        if (isSimilar(item.name_person, search)) {
                            return <Element data={item} key={item.id_person}/>
                        }
                    })
                }
            </DivContainer>
        </>

    )
}



export default Container