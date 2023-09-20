import ROLES from "../constants/Roles.ts";
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
    id_person: number,
    name_person: string,
    study_group: string,
    role_person: RoleType
}

export interface IPersonsElementProps {
    data: IPersonsElement
}

export interface IPersonsListProps {
    data: IPersonsElement[]
}

export interface IRoleIconProps {
    role: RoleType
    color?: string
    size?: string | number
    style?: any
}


