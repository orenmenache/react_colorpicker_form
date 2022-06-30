import { useState } from "react";

type FormInputProps = {
    id: string | number,
    name: string,
    type: string,
    label: string,

    errorMessage?: string,
    pattern?: string,
    title?: string,
    required?: boolean,
    value?: any, //string | number | boolean | Gender,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    options?: string[]
}

export default function FormInput(props: FormInputProps){
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        data-focused={focused.toString()} //https://stackoverflow.com/questions/46215614/property-does-not-exist-on-type-detailedhtmlprops-htmldivelement-with-react
      />
      <span>{errorMessage}</span>
    </div>
  );
};