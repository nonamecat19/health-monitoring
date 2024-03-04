import {ROLES} from "../constants";
import {Dispatch, SetStateAction} from "react";

export type RoleType = typeof ROLES[keyof typeof ROLES]

export interface IPersonsRequest {
  data: IPersonsElement[]
  maxPage: number
}

export interface IPersonsContainerProps {
  data: IPersonsElement[]
}

export interface IPersonSearch {
  page: number,
  prev: () => void,
  next: () => void,
  setPage: Dispatch<SetStateAction<number>>
  search: string
  maxPage: number
  setMaxPage: Dispatch<SetStateAction<number>>
}

export interface IPersonsElement {
  personId: number
  studentID: number
  name: string
  surname: string
  patronymic: string
  studyGroup: string
  role: string
  email: string
}

export interface IPersonsElementProps {
  data: IPersonsElement
}

export interface IPersonsListProps {
  data: IPersonsElement[]
}

export interface IRoleIconProps {
  role: string
  // role: RoleType
  color?: string
  size?: string | number
  style?: any
}


