import {Icon, IconElement} from "@ui-kitten/components";

export default function GetEvaIcon(name: string) {
  return (props: any): IconElement => (
    <Icon
      {...props}
      name={name}
    />
  );
}
