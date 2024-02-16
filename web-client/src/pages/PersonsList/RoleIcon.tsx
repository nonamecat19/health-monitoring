import {FC} from "react";
import {IRoleIconProps} from "../../shared/types/Persons.ts";
import {ROLES} from "../../shared/constants";
import {AiOutlineUser} from 'react-icons/ai';

export const RoleIcon: FC<IRoleIconProps> = ({role, color, size = '1rem', style}) => {
  switch (role) {
    // case ROLES.NURSE:
    //     return <GiMedicalPackAlt size={size} color={color} style={style}/>
    // case ROLES.ADMIN:
    //     return <RiAdminLine size={size} color={color} style={style}/>
    case ROLES.STUDENT:
      return <AiOutlineUser size={size} color={color} style={style}/>
    // case ROLES.TEACHER:
    //     return <MdOutlineCastForEducation size={size} color={color} style={style}/>
    default:
      return null
  }
}
