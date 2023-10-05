import {Icon, Input} from "@ui-kitten/components";
import {TouchableWithoutFeedback} from "@ui-kitten/components/devsupport";
import {ReactElement, useState} from "react";

export default function LoginScreen() {
  const [value, setValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props: any): ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        {...props}
        name={secureTextEntry ? 'eye-off' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      value={value}
      label='Password'
      placeholder='Place your Text'
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => setValue(nextValue)}
    />
  );
}