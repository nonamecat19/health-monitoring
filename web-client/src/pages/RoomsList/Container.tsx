import {ChangeEvent, FC, useState} from "react";
import {Element} from "./Element.tsx";
import {DivContainer, FiltersSpace} from "./styles.ts";
import {IRoomsElement, IRoomsListProps} from "../../shared/types/Rooms.ts";
import {Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {isSimilar} from "../../shared/utils";
import styled from "styled-components";
import {ToCenter} from "../../shared/styles";

export const Container: FC<IRoomsListProps> = ({data}) => {
  const [search, setSearch] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.currentTarget.value)
  }

  return (
    <DivContainer>
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
      {
        data.map((item: IRoomsElement) => {
          if (isSimilar(item.roomNumber, search)) {
            return <Element data={item} key={item.roomNumber}/>
          }
        })
      }
    </DivContainer>
  )
}

const NameFilter = styled(Input)`
    width: 300px;
    margin: -25px auto 0 auto;
`
