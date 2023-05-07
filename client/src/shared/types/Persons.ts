import ROLES from "../constants/Roles.ts";

export type RoleType = typeof ROLES[keyof typeof ROLES]

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


